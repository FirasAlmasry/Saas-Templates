import React from 'react'
import Goals from '../components/AboutUs/Goals';
import Projects from '../components/Projects/Projects';
import Blogs from '../components/blogs/Blogs';
import Hero from '../components/Heros';
import Intro from '../components/AboutUs/Introductions';
import Services from '../components/Services/Services';
import { useHome } from '../hooks/useHome';
import LoadingPage from '../components/global/LoadingPage';
import { useNameSection } from '../hooks/useNameSection';

const Home = () => {
  
  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('home');

  const { sections } = nameSection?.data || {};

  const home = {
    heroSection: sections?.find(section => section.name.includes('Hero'))?.component?.[0]?.name,
    serviceSection: sections?.find(section => section.name.includes('Services'))?.component?.[0]?.name,
    introSection: sections?.find(section => section.name.includes('Bio'))?.component?.[0]?.name,
    goalSection: sections?.find(section => section.name.includes('Goals'))?.component?.[0]?.name,
    projectSection: sections?.find(section => section.name.includes('Projects'))?.component?.[0]?.name,
    blogSection: sections?.find(section => section.name.includes('Blogs'))?.component?.[0]?.name,
  };

  const { home: homeData, isLoading } = useHome()
  if (isLoading || isLoadingNameSection ) return <LoadingPage />
  const { data } = homeData
  const bioSection = data.bioSection || [];
  const bioImage = data.bioImage || '';

  const main_title = bioSection.find(item => item.key === 'bio_section_main_title')?.value || '';
  const description = bioSection.find(item => item.key === 'bio_section_desc')?.value || '';
  const about_section_image = bioImage;
  
  const dataAbout = {
    main_title,
    description,
    about_section_image
  }
  return (
    <>
      <Hero nameSection={home} data={data}  />
      <Intro nameSection={home} data={dataAbout} />
      <Services nameSection={home} />
      <Goals nameSection={home} />
      <Projects nameSection={home} />
      <Blogs nameSection={home} />
    </>
  )
}

export default Home