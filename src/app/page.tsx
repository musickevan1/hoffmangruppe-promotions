import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Elevate Your Brand with Hoffmangruppe
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in animate-delay-200">
            Innovative marketing solutions for the digital age
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 animate-fade-in animate-delay-400">
            Get Started
          </button>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Hoffmangruppe Promotions is a leading marketing agency specializing in digital transformation and innovative brand strategies.
            </p>
            <p className="text-gray-600">
              Our team of experts delivers cutting-edge solutions to help businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
