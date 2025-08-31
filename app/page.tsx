import React from 'react'
import HeroSection from '@/app/components/landing-page/HeroSection'
import DecouverteSection from '@/app/components/landing-page/DecouverteSection'
import TouristSiteSection from '@/app/components/landing-page/TouristSiteSection'
import ArtisanalShopSection from '@/app/components/landing-page/ArtisanalShopSection'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <TouristSiteSection />
        <DecouverteSection />
        <ArtisanalShopSection />
    </div>
  )
}

export default LandingPage