import React from 'react'


import Goals from '../components/AboutUs/Goals';
import Visions from '../components/AboutUs/Visions';
import Missions from '../components/AboutUs/Missions';
import Header from '../components/global/headers/Header';
import Intro from '../components/AboutUs/Introductions';

const About = () => {

  return (
    <>
      <Header />
      <Intro />
      <Missions />
      <Goals />
      <Visions />
    </>
  )
}

export default About