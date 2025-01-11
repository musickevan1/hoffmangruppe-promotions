import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Hoffmangruppe Promotions</title>
        <meta name="description" content="Learn about our company and our mission" />
      </Head>
      
      <Header />
      <main className="page-about min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-12 text-hoff-blue-600 text-center">About Hoffmangruppe Promotions</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="/HP-logo.jpg" 
                  alt="Hoffmangruppe Logo"
                  className="w-32 mx-auto mb-6"
                />
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    I started Hoffmangruppe Promotions in 2010 as an Authorized Kaeser & Blair Dealer to provide
                    specialty marketing solutions to my friends, family, and my organizations at discounted prices.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I am grateful to have received countless referrals from my initial market. I am committed to
                    saving my clients' marketing budgets for the same quality products they can get elsewhere.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I look forward to connecting and becoming your marketing partner!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-hoff-blue-600">About Kaeser & Blair</h2>
              <img 
                src="/K&B.png" 
                alt="Kaeser & Blair Logo"
                className="w-48 mx-auto mb-8"
              />
              <p className="text-lg leading-relaxed text-gray-700">
                Kaeser and Blair is a family owned company that has been a leader in the
                industry for 130 years! They have long lasting relationships with all of
                the industry suppliers. What that means for our clients is hundreds of
                preferred vendors offering YOU better pricing, reduced setup fees, and
                faster turnaround times!
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-hoff-blue-600">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              To provide innovative, cost-effective marketing solutions that help businesses
              and organizations achieve their goals while maintaining the highest standards
              of quality and service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
