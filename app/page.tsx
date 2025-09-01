import React from 'react'
import HeroSection from '@/app/components/landing-page/HeroSection'
import DecouverteSection from '@/app/components/landing-page/DecouverteSection'
import TouristSiteSection from '@/app/components/landing-page/TouristSiteSection'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <TouristSiteSection />
        <DecouverteSection />
    </div>
  )
}

export default LandingPage