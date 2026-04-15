/**
 * Validate an existing license / instance pair.
 *
 * Request:  POST { license_key: string, instance_id?: string, site_url?: string }
 * Response: normalized license state (see lib/lemonsqueezy.ts — NormalizedLicense).
 */

import { NextResponse } from 'next/server';
import { validateLicense, normalize } from '@/lib/lemonsqueezy';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { license_key, instance_id } = await req.json().catch(() => ({}));

  if (typeof license_key !== 'string' || license_key.trim().length < 8) {
    return NextResponse.json(
      { valid: false, tier: 'free', message: 'Missing or malformed license_key' },
      { status: 400 }
    );
  }

  const ls = await validateLicense(
    license_key.trim(),
    typeof instance_id === 'string' && instance_id ? instance_id : undefined
  );
  const normalized = normalize(ls, 'License not valid');

  return NextResponse.json(normalized, {
    status: normalized.valid ? 200 : 404
  });
}
