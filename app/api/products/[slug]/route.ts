import { getProductBySlug } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return NextResponse.json({ success: false, error: { code: 'PRODUCT_NOT_FOUND', message: 'Product does not exist.' } }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: product, message: 'Product fetched.' });
}
