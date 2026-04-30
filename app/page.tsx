import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import UnderDevelopment from '@/components/UnderDevelopment'

export default function Home() {
  return (
    <>
      <main className="blur-sm">
        <Header />
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
        <Footer />
      </main>
      <UnderDevelopment />
    </>
  )
}
