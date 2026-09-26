# if using Python scripts locally, you can generate store-ready data from the list below
# This is intentionally demo seed data for development, not production supplier data.

PRODUCTS = [
    {
        'sku': 'LOR-REV-001',
        'brand': "L'Oréal Paris",
        'name': 'Revitalift Hyaluronic Acid Serum',
        'category': 'Skincare',
        'subcategory': 'Serum',
        'price': 1790,
        'compareAtPrice': 2200,
        'stock': 18,
        'rating': 4.8,
        'reviewCount': 126,
        'slug': 'loreal-revitalift-hyaluronic-acid-serum'
    },
    {
        'sku': 'MAY-GLA-082',
        'brand': 'Maybelline',
        'name': 'Super Stay Matte Ink Liquid Lipstick',
        'category': 'Cosmetics',
        'subcategory': 'Lipstick',
        'price': 1190,
        'compareAtPrice': 1490,
        'stock': 36,
        'rating': 4.9,
        'reviewCount': 204,
        'slug': 'maybelline-super-stay-matte-ink-lipstick'
    },
    {
        'sku': 'CAS-LUX-001',
        'brand': 'Casio',
        'name': 'A168WA-1W Classic Women Watch',
        'category': "Women's Watches",
        'subcategory': 'Casual',
        'price': 2790,
        'compareAtPrice': 3400,
        'stock': 15,
        'rating': 4.6,
        'reviewCount': 89,
        'slug': 'casio-a168wa-1w-classic-women-watch'
    }
]

print('Seed records prepared for development environment.')
print(f'Example products: {len(PRODUCTS)}')
