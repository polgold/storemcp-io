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
  licenseKey: string
): Promise<LicenseValidation> {
  const res = await fetch(`${LS_API}/licenses/validate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ license_key: licenseKey }),
    cache: 'no-store'
  });

  return (await res.json()) as LicenseValidation;
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
