import { searchProducts } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? '';
  const results = searchProducts(query);

  return NextResponse.json({
    success: true,
    data: results,
    message: query ? `Search results for “${query}”` : 'All products'
  });
}
