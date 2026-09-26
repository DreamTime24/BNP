import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
    message: 'Product catalog fetched successfully.'
  });
}
