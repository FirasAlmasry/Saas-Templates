import React from 'react'
import Header from '../components/global/headers/Header'
import DetailsPage from '../components/Projects/DetailsPage'
import { useProject } from '../hooks/useProject'
import LoadingPage from '../components/global/LoadingPage'

const Project = () => {

  const { project, isLoading } = useProject()
  if (isLoading) return <LoadingPage />

  return (
    <>
      <Header cover={project?.project_cover} />
      <DetailsPage data={project} />
    </>
  )
}

export default Project