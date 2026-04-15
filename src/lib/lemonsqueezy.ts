export const LEMONSQUEEZY_CHECKOUT = {
  pro: 'https://storemcp.lemonsqueezy.com/checkout/buy/01ab855d-119b-48e3-a6d7-6236d56de8f3',
  agency:
    'https://storemcp.lemonsqueezy.com/checkout/buy/5b1ffd62-f9e4-4e88-9aab-21fd910f3bf4'
} as const;

export type LicenseStatus =
  | 'active'
  | 'inactive'
  | 'expired'
  | 'disabled'
  | 'unpaid';

export type LicenseInstance = {
  id: string;
  name: string;
  created_at: string;
};

export type LicenseValidation = {
  valid: boolean;
  error?: string;
  license_key?: {
    id: number;
    status: LicenseStatus;
    key: string;
    activation_limit: number | null;
    activation_usage: number;
    created_at: string;
    expires_at: string | null;
  };
  meta?: {
    store_id: number;
    order_id: number;
    order_item_id: number;
    variant_id: number;
    variant_name: string;
    product_id: number;
    product_name: string;
    customer_id: number;
    customer_name: string;
    customer_email: string;
  };
  instances?: LicenseInstance[];
};

const LS_API = 'https://api.lemonsqueezy.com/v1';

export async function validateLicense(
  licenseKey: string,
  instanceId?: string
): Promise<LicenseValidation> {
  const body = new URLSearchParams({ license_key: licenseKey });
  if (instanceId) body.set('instance_id', instanceId);

  const res = await fetch(`${LS_API}/licenses/validate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body,
    cache: 'no-store'
  });

  return (await res.json()) as LicenseValidation;
}

export type LicenseActivation = LicenseValidation & {
  instance?: LicenseInstance;
};

export async function activateLicenseInstance(
  licenseKey: string,
  instanceName: string
): Promise<LicenseActivation> {
  const res = await fetch(`${LS_API}/licenses/activate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      license_key: licenseKey,
      instance_name: instanceName
    }),
    cache: 'no-store'
  });

  return (await res.json()) as LicenseActivation;
}

/**
 * Map a Lemon Squeezy response to the shape the WordPress plugin expects.
 * Tier is inferred from meta.variant_name (case-insensitive).
 */
export type NormalizedLicense = {
  valid: boolean;
  tier: 'free' | 'pro' | 'agency';
  expires_at: string;
  sites_used: number;
  sites_max: number;
  customer: string;
  instance_id: string;
  message: string;
};

export function normalize(
  ls: LicenseActivation,
  fallbackMessage = ''
): NormalizedLicense {
  const variant = (ls.meta?.variant_name ?? '').toLowerCase();
  const product = (ls.meta?.product_name ?? '').toLowerCase();
  const status = ls.license_key?.status;
  // LS /activate returns `activated`, /validate returns `valid`. Accept either,
  // and trust `status === 'active'` as the source of truth.
  const flagged = Boolean(ls.valid) || Boolean((ls as { activated?: boolean }).activated);
  const active = status === 'active' && (flagged || !ls.error);

  let tier: NormalizedLicense['tier'] = 'free';
  if (active) {
    if (variant.includes('agency') || product.includes('agency')) tier = 'agency';
    else if (variant.includes('pro') || product.includes('pro')) tier = 'pro';
  }

  const limit = ls.license_key?.activation_limit;
  const sitesMax =
    tier === 'agency' ? 999 : typeof limit === 'number' && limit > 0 ? limit : 1;

  return {
    valid: active,
    tier,
    expires_at: ls.license_key?.expires_at ?? '',
    sites_used: ls.license_key?.activation_usage ?? 0,
    sites_max: sitesMax,
    customer: ls.meta?.customer_name ?? '',
    instance_id: ls.instance?.id ?? '',
    message:
      ls.error ??
      (active ? 'License active' : status ? `License ${status}` : fallbackMessage)
  };
}

export async function deactivateLicenseInstance(
  licenseKey: string,
  instanceId: string
): Promise<{ deactivated: boolean; error?: string }> {
  const res = await fetch(`${LS_API}/licenses/deactivate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      license_key: licenseKey,
      instance_id: instanceId
    }),
    cache: 'no-store'
  });

  const data = await res.json();
  return {
    deactivated: Boolean(data.deactivated),
    error: data.error
  };
}
