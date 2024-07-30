import React from 'react'


import Goals from '../components/AboutUs/Goals';
import Visions from '../components/AboutUs/Visions';
import Missions from '../components/AboutUs/Missions';
import Header from '../components/global/headers/Header';
import Intro from '../components/AboutUs/Introductions';

const About = () => {
  const about = { introSection: 'Introduction3', goalSection: 'Card3',}
  return (
    <>
      <Header />
      <Intro nameSection={about}/>
      <Missions />
      <Goals nameSection={about} />
      <Visions />
    </>
  )
}

export default About