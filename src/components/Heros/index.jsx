import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';
import importComponent from '../../utils/importComponent';

const Hero = ({ nameSection, data }) => {

  const Component = importComponent(`/Heros/${nameSection.heroSection}/${nameSection.heroSection}`);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component data={data} />
    </Suspense>
  )
}

export default Hero