import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function HeroSection({ id }) {
  return (
    <section 
      id={id} 
      className="relative h-[calc(100vh-4rem)] bg-[url('/hero-banner.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-hoff-blue-900/90 to-hoff-blue-900/70"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-2xl space-y-6 text-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Innovative Promotional Solutions
            <span className="block text-2xl font-normal mt-4 text-hoff-blue-100">
              Where Creativity Meets Strategy
            </span>
          </h1>
          <p className="text-xl text-hoff-blue-100 mb-8">
            Elevate your brand with our cutting-edge promotional strategies and products
          </p>
          <button
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }
            }}
            className="inline-block bg-hoff-gradient text-white px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transform transition-all shadow-lg cursor-pointer"
          >
            Explore Our Products
          </button>
        </div>
        
        {/* Scroll tip animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
