import { NextResponse } from 'next/server';
import { deactivateLicenseInstance } from '@/lib/lemonsqueezy';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { license_key, instance_id } = await req.json().catch(() => ({}));

  if (typeof license_key !== 'string' || typeof instance_id !== 'string') {
    return NextResponse.json(
      { deactivated: false, error: 'license_key and instance_id required' },
      { status: 400 }
    );
  }

  const result = await deactivateLicenseInstance(license_key.trim(), instance_id);
  return NextResponse.json(result, {
    status: result.deactivated ? 200 : 400
  });
}
