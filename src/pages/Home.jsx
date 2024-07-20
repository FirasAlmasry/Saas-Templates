import React, { lazy } from 'react'
import Goals from '../components/AboutUs/Goals';
import Visions from '../components/AboutUs/Visions';
import Missions from '../components/AboutUs/Missions';
import Projects from '../components/Projects/Projects';
import Blogs from '../components/blogs/Blogs';
import Hero from '../components/Heros';
import Intro from '../components/AboutUs/Introductions';

const Services = lazy(() => import('../components/Services/Services'));

const Home = () => {

  return (
    <>
      <Hero />
      <Services />
      <Intro />
      <Goals />
      <Visions />
      <Missions />
      <Projects />
      <Blogs />
    </>
  )
}

export default Home