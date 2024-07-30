import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';
import importComponent from '../../utils/importComponent';

const Hero = ({data}) => {

  const Component = importComponent(`/Heros/${data.heroSection}/${data.heroSection}`);

  return (
      <Suspense fallback={<LoadingPage />}>
          <Component />
      </Suspense>
  )
}

export default Hero