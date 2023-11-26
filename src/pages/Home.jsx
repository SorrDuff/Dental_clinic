import React from 'react'
import HeroSection from '../compunents/HeroSection'
import PricingSection from '../compunents/PricingSection'
import ServicesSection from '../compunents/ServicesSection'
import AboutUsSection from '../compunents/AboutSection'
import TeamSection from '../compunents/TeamSection'
import ContactSection from '../compunents/ContactSection'


function Home() {
  return (
    <div>
       <HeroSection />
       <ServicesSection />
       <PricingSection />
       <AboutUsSection />
       <TeamSection />
       <ContactSection />
        
    </div>
  )
}

export default Home