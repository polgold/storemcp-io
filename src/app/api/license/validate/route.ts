import { NextResponse } from 'next/server';
import { validateLicense } from '@/lib/lemonsqueezy';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { license_key } = await req.json().catch(() => ({}));

  if (typeof license_key !== 'string' || license_key.length < 8) {
    return NextResponse.json(
      { valid: false, error: 'Missing or malformed license_key' },
      { status: 400 }
    );
  }

  const result = await validateLicense(license_key.trim());
  return NextResponse.json(result, {
    status: result.valid ? 200 : 404
  });
}
