import React, { lazy, Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';
const Hero1 = lazy(() => import('./Hero1/Hero1'));
const Hero2 = lazy(() => import('./Hero2/Hero2'));
const Hero3 = lazy(() => import('./Hero3/Hero3'));
const Hero = () => {

      const renderHeroSection = () => {
    const data = { heroSection: 'hero1'}
    switch (data.heroSection) {
      case 'hero1': return <Hero1 />;
      case 'hero2': return <Hero2 />;
      case 'hero3': return <Hero3 />;
      default: return null;
    }
  }
  return (
      <Suspense fallback={<LoadingPage />}>
          {renderHeroSection()}
      </Suspense>
  )
}

export default Hero