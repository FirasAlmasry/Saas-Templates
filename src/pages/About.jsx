import React from 'react'
import Goals from '../components/AboutUs/Goals';
import Visions from '../components/AboutUs/Visions';
import Missions from '../components/AboutUs/Missions';
import Header from '../components/global/headers/Header';
import Intro from '../components/AboutUs/Introductions';
import { useAbout } from '../hooks/useAbout';
import LoadingPage from '../components/global/LoadingPage';
import { useNameSection } from '../hooks/useNameSection';

const About = () => {
  
  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('about');

  const { sections } = nameSection?.data || {};

  const about = {
    introSection: sections?.find(section => section.name.includes('Intro'))?.component?.[0]?.name,
    goalSection: sections?.find(section => section.name.includes('Goals'))?.component?.[0]?.name,
  };
  const { about: aboutData, isLoading } = useAbout()
  if (isLoading || isLoadingNameSection) return <LoadingPage />
  const { data } = aboutData

  return (
    <>
      <Header page_name={data?.page_name} cover={data?.about_page_cover}  />
      <Intro nameSection={about} data={data} />
      <Missions data={data} />
      <Goals nameSection={about} />
      <Visions data={data} />
    </>
  )
}

export default About