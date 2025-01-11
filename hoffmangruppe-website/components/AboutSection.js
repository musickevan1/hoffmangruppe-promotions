import { motion } from 'framer-motion'

export default function AboutSection({ id }) {
  return (
    <section id={id} className="min-h-screen py-20 bg-hoff-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        
        {/* Hoffmangruppe Promotions Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col justify-center">
            <img 
              src="/HP-logo.jpg" 
              alt="Hoffmangruppe Promotions Logo"
              className="w-64 mb-8"
            />
            <p className="text-lg leading-relaxed">
              I started Hoffmangruppe Promotions in 2010 as an Authorized Kaeser & Blair Dealer to provide 
              specialty marketing solutions to my friends, family, and my organizations at discounted prices. 
              I am grateful to have received countless referrals from my initial market. I am committed to 
              saving my clients' marketing budgets for the same quality products they can get elsewhere. 
              I look forward to connecting and becoming your marketing partner!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/images/about.jpg" 
              alt="About Hoffmangruppe Promotions"
              className="rounded-lg shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Kaeser & Blair Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center order-last md:order-first">
            <img 
              src="/K&B.png" 
              alt="Kaeser & Blair Logo"
              className="rounded-lg shadow-lg max-h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <img 
              src="/K&B.png" 
              alt="Kaeser & Blair Logo"
              className="w-64 mb-8"
            />
            <p className="text-lg leading-relaxed">
              Kaeser and Blair is a family-owned company that has been a leader in the industry for 130 years! 
              They have long-lasting relationships with all of the industry suppliers. What that means for our 
              clients is hundreds of preferred vendors offering YOU better pricing, reduced setup fees, and 
              faster turnaround times!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
