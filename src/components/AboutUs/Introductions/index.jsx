import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';

const Intro = ({ nameSection, data }) => {

  const Component = importComponent(`/AboutUs/Introductions/${nameSection?.introSection}`);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component data={data}/>
    </Suspense>
  )
}

export default Intro