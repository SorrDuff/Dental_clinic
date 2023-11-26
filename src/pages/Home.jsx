import React from 'react'
import HeroSection from '../compunents/HeroSection'
import PricingSection from '../compunents/PricingSection'
import ServicesSection from '../compunents/ServicesSection'
import AboutUsHeroSection from '../compunents/AboutUsHeroSection'
import TeamSection from '../compunents/TeamSection'
import ContactSection from '../compunents/ContactSection'


function Home() {
  return (
    <div>
       <HeroSection />
       <ServicesSection />
       <PricingSection />
       <AboutUsHeroSection />
       <TeamSection />
       <ContactSection />
        
    </div>
  )
}

export default Home