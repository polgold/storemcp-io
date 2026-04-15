/**
 * Activate a license key for a specific WordPress site (= Lemon Squeezy "instance").
 *
 * Request:  POST { license_key: string, site_url: string }
 * Response: normalized license state (see lib/lemonsqueezy.ts — NormalizedLicense).
 *
 * The plugin calls this once, stores the returned instance_id, then uses
 * /validate with that instance_id for subsequent checks.
 */

import { NextResponse } from 'next/server';
import { activateLicenseInstance, normalize } from '@/lib/lemonsqueezy';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { license_key, site_url } = await req.json().catch(() => ({}));

  if (typeof license_key !== 'string' || license_key.trim().length < 8) {
    return NextResponse.json(
      { valid: false, tier: 'free', message: 'Missing or malformed license_key' },
      { status: 400 }
    );
  }

  const instanceName =
    typeof site_url === 'string' && site_url ? site_url : 'unknown-site';

  const ls = await activateLicenseInstance(license_key.trim(), instanceName);
  const normalized = normalize(ls, 'Activation failed');

  return NextResponse.json(normalized, {
    status: normalized.valid ? 200 : 400
  });
}
