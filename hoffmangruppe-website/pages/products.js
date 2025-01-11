import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

export default function Products() {
  return (
    <div>
      <Head>
        <title>Our Products - Hoffmangruppe Promotions</title>
        <meta name="description" content="Explore our wide range of promotional products" />
      </Head>
      
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-hoff-blue-600">Our Products & Services</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-hoff-blue-600">Catalogs</h2>
            <div className="space-y-4">
              <a 
                href="https://viewer.zoomcats.com/hoffmangruppe-promotions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-hoff-blue-50 p-4 rounded-lg hover:bg-hoff-blue-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">One Stop Shop Catalog</h3>
                <p className="text-gray-600">Explore our full range of promotional products</p>
              </a>
              
              <a 
                href="https://kbwindjammer.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-hoff-blue-50 p-4 rounded-lg hover:bg-hoff-blue-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Quarterly Sales Flyer</h3>
                <p className="text-gray-600">Check out our latest deals and specials</p>
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-hoff-blue-600">Wearables</h2>
            <div className="space-y-4">
              <a 
                href="https://www.sportswearcollection.com/Hoffmangruppe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-hoff-blue-50 p-4 rounded-lg hover:bg-hoff-blue-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Sportswear Collection</h3>
                <p className="text-gray-600">Custom apparel and sportswear</p>
              </a>
              
              <a 
                href="https://www.companycasuals.com/Hoffmangruppe/start.jsp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-hoff-blue-50 p-4 rounded-lg hover:bg-hoff-blue-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">Company Casuals</h3>
                <p className="text-gray-600">Business and casual wear</p>
              </a>
            </div>
          </div>

          <div className="bg-hoff-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-hoff-blue-600">Request a Quote</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 border rounded w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border rounded w-full"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Product Catalog"
                className="p-2 border rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Item Number"
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Color"
                className="p-2 border rounded w-full"
              />
              <input
                type="number"
                placeholder="Quantity"
                className="p-2 border rounded w-full"
              />
              <textarea
                placeholder="Brief Explanation"
                className="p-2 border rounded w-full"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-hoff-blue-600 text-white px-6 py-2 rounded hover:bg-hoff-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
