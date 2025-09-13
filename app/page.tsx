import React from 'react'
import HeroSection from '@/app/components/landing-page/HeroSection'
import DecouverteSection from '@/app/components/landing-page/DecouverteSection'
import TouristSiteSection from '@/app/components/landing-page/TouristSiteSection'

import ArtisanalShopSection from '@/app/components/landing-page/ArtisanalShopSection'
import CulturalEventsSection from '@/app/components/landing-page/CulturalEventsSection'
import { TestimonialsSection } from './components/landing-page/TestimonialsSection'
import CTASection from './components/landing-page/CTASection'
  const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <TouristSiteSection />
        <DecouverteSection />
        <ArtisanalShopSection />
        {/* <CulturalEventsSection/> */}
        <TestimonialsSection/>
        <CTASection/>
    </div>
  )
}

export default LandingPage