export default function HeroSection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Innovative Promotional Solutions
          </h1>
          <p className="text-xl mb-8">
            Discover our wide range of promotional products and services tailored
            to your business needs.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
              Explore Products
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
