import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight
      const offsetPosition = section.offsetTop - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${isScrolled ? 'py-4' : 'py-6'}`}>
      <nav className="container mx-auto px-4 flex justify-end items-center space-x-8">
        <div className="absolute left-4">
          <button onClick={() => scrollToSection('home')}>
            <img 
              src="/HP-logo.jpg" 
              alt="Hoffmangruppe Logo"
              className={`transition-all ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </button>
        </div>
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-hoff-blue-600 hover:text-hoff-blue-500 font-medium transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-hoff-blue-600 hover:text-hoff-blue-500 font-medium transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('insights')}
            className="text-hoff-blue-600 hover:text-hoff-blue-500 font-medium transition-colors"
          >
            Insights
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-hoff-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}
