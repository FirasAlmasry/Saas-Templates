import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';

const Intro = ({ nameSection }) => {

  const Component = importComponent(`/AboutUs/Introductions/${nameSection?.introSection}`);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  )
}

export default Intro