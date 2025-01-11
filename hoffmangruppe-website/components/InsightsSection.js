import { motion } from 'framer-motion'

export default function InsightsSection({ id }) {
  return (
    <section id={id} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Industry Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                Download our latest industry insights report to stay ahead of the curve.
              </p>
              <a
                href="/insights.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Report (PDF)
              </a>
            </div>
            <div className="h-[500px]">
              <iframe
                src="/insights.pdf"
                className="w-full h-full rounded-lg shadow-lg"
                title="Industry Insights PDF"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
