import React, { useState } from 'react'
import Header from '../components/global/headers/Header'
import WrapperSection from '../components/global/WrapperSection'
import GridItems from '../components/global/GridItems'
import { Grid } from '@mui/material'
// import { projects } from '../constants/projects'
import Card from '../components/Projects/cards'
import { useProjects } from '../hooks/useProjects'
import LoadingPage from '../components/global/LoadingPage'
import CustomPagination from '../components/global/CustomPagination'
import { useNameSection } from '../hooks/useNameSection'

const Projects = () => {

  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('our-projects');

  // التحقق من أن البيانات متوفرة قبل محاولة الوصول إلى `sections`
  const { sections } = nameSection?.data || {};

  const Projects = {
    projectSection: sections?.find(section => section.name.includes('Projects'))?.component?.[0]?.name,
  };

  console.log("🚀 ~ Projects ~ structured data:", Projects);
  const [page, setPage] = useState(1);
  const { projects, isLoading } = useProjects(page)
  if (isLoading || isLoadingNameSection) return <LoadingPage />
  
  return (
    <>
      <Header page_name={projects?.project_title}  cover={projects?.project_cover}/>
      <WrapperSection title={projects?.project_title} >
        {projects && <GridItems data={projects?.data}
          render={(project) => <Grid item md={4} xs={12} key={project?.slug} ><Card nameSection={Projects} project={project} /> </Grid>} />}
        <CustomPagination
          setCurrentPage={setPage}
          count={projects?.meta?.last_page}
          currentPage={page} />
      </WrapperSection>
    </>
  )
}

export default Projects