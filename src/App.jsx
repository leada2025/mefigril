import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyMefigril from './components/WhyMefigril'
import HowItWorks from './components/HowItWorks'
import HowToUse from './components/HowToUse'
import SideEffects from './components/SideEffects'
import FAQ from './components/FAQ'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <WhyMefigril />
      <HowItWorks />
      <HowToUse />
      <SideEffects />
      <FAQ />
      <Footer />
      
    </div>
  )
}

export default App