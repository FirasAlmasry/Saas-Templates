import React from 'react'
import Header from '../components/global/headers/Header'
import WrapperSection from '../components/global/WrapperSection'
import GridItems from '../components/global/GridItems'
import { Grid } from '@mui/material'
import { projects } from '../constants/projects'
import Card from '../components/Projects/cards'

const Projects = () => {

  return (
    <>
      <Header />
      <WrapperSection title={`Our Projects`} >
        {projects && <GridItems data={projects}
          render={(project) => <Grid item md={4} xs={12} key={project?.id} ><Card project={project} /> </Grid>} />}
      </WrapperSection>
    </>
  )
}

export default Projects