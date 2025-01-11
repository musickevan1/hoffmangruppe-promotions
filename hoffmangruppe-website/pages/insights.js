import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Insights() {
  return (
    <div>
      <Head>
        <title>Industry Insights - Hoffmangruppe Promotions</title>
        <meta name="description" content="Stay updated with the latest industry trends and insights" />
      </Head>
      
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Industry Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Latest Trends</h2>
            <p className="mb-4">Explore our latest industry analysis...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Download Report</h2>
            <a 
              href="/insights.pdf" 
              download
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
