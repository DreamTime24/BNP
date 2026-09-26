import { products } from '@/data/products';

export function formatPrice(value: number) {
  return `৳${value.toLocaleString('en-BD')}`;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function searchProducts(term: string) {
  if (!term.trim()) return products;
  const query = term.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(query) ||
    product.brand.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
    product.sku.toLowerCase().includes(query)
  );
}
