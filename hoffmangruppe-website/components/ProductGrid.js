import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Apparel',
    image: '/products/apparel.jpg',
    link: '/products/apparel'
  },
  {
    id: 2,
    name: 'Drinkware',
    image: '/products/drinkware.jpg',
    link: '/products/drinkware'
  },
  {
    id: 3,
    name: 'Tech Accessories',
    image: '/products/tech.jpg',
    link: '/products/tech'
  },
  {
    id: 4,
    name: 'Office Supplies',
    image: '/products/office.jpg',
    link: '/products/office'
  },
  {
    id: 5,
    name: 'Outdoor Gear',
    image: '/products/outdoor.jpg',
    link: '/products/outdoor'
  },
  {
    id: 6,
    name: 'Custom Packaging',
    image: '/products/packaging.jpg',
    link: '/products/packaging'
  }
]

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-hoff-blue-900 mb-8 text-center">
        Our Product Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <Link 
            key={product.id}
            href={product.link}
            className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-hoff-blue-900/70 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white group-hover:text-hoff-blue-200 transition-colors">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
