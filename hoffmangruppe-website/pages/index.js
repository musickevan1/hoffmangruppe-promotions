import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import InsightsSection from '../components/InsightsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Hoffmangruppe Promotions</title>
        <meta name="description" content="Your partner in innovative promotional solutions" />
      </Head>

      <Header />
      
      <main>
        <motion.div style={{ scale }}>
          <HeroSection id="home" />
          <AboutSection id="about" />
          <ProductsSection id="products" />
          <InsightsSection id="insights" />
          <ContactSection id="contact" />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
