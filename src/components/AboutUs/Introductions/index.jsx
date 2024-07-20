import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';


const Intro1 = lazy(() => import('./Introduction1'));
const Intro2 = lazy(() => import('./Introduction2'));
const Intro3 = lazy(() => import('./Introduction3'));

const Intro = () => {
      const renderIntroSection = () => {
    const data = { introSection: 'intro1', }
    switch (data.introSection) {
      case 'intro1': return <Intro1 />;
      case 'intro2': return <Intro2 />;
      case 'intro3': return <Intro3 />;
      default: return null;
    }
  }

  return (
      <Suspense fallback={<LoadingPage />}>
          {renderIntroSection()}
      </Suspense>
  )
}

export default Intro