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
  const home = { heroSection: 'Hero1', serviceSection: 'Card1', introSection: 'Introduction1', goalSection: 'Card2', projectSection: 'Card2', blogSection:'Card3' }
  return (
    <>
      <Hero data={home} />
      <Services nameSection={home} />
      <Intro nameSection={home} />
      <Goals nameSection={home} />
      <Visions />
      <Missions />
      <Projects nameSection={home} />
      <Blogs nameSection={home} />
    </>
  )
}

export default Home