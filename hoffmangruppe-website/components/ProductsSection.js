import { motion } from 'framer-motion'
import Link from 'next/link'

const catalogs = [
  {
    name: 'One Stop Shop Catalog',
    link: 'https://viewer.zoomcats.com/hoffmangruppe-promotions',
    image: '/images/catalog1.jpg'
  },
  {
    name: 'Quarterly Sales Flyer',
    link: 'https://kbwindjammer.com',
    image: '/images/catalog2.jpg'
  },
  {
    name: 'Wearables',
    sublinks: [
      {
        name: 'Sportswear Collection',
        link: 'https://www.sportswearcollection.com/Hoffmangruppe'
      },
      {
        name: 'Company Casuals',
        link: 'https://www.companycasuals.com/Hoffmangruppe/start.jsp'
      }
    ],
    image: '/images/wearables.jpg'
  }
]

export default function ProductsSection({ id }) {
  return (
    <section id={id} className="min-h-screen py-20 bg-hoff-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Products</h2>
        
        {/* Catalog Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={catalog.image} 
                alt={catalog.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{catalog.name}</h3>
                {catalog.sublinks ? (
                  <div className="space-y-2">
                    {catalog.sublinks.map((sublink, i) => (
                      <Link
                        key={i}
                        href={sublink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-hoff-blue-600 hover:text-hoff-blue-500"
                      >
                        {sublink.name} →
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={catalog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hoff-blue-600 hover:text-hoff-blue-500"
                  >
                    View Catalog →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search Section */}
        <div className="mb-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Didn't Find It?</h3>
          <Link
            href="https://www.zoomcatalog.com/catalogsearch/HoffmangruppePromotions#list/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-hoff-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Search Here
          </Link>
        </div>

        {/* Request a Quote Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Request a Quote</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="catalog" className="block mb-2 font-medium">Product Catalog</label>
                <input
                  type="text"
                  id="catalog"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="itemNumber" className="block mb-2 font-medium">Item Number</label>
                <input
                  type="text"
                  id="itemNumber"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="color" className="block mb-2 font-medium">Color</label>
                <input
                  type="text"
                  id="color"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block mb-2 font-medium">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="explanation" className="block mb-2 font-medium">Brief Explanation</label>
              <textarea
                id="explanation"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoff-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-hoff-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
