import React, { useEffect } from 'react'
import Header from '../components/global/headers/Header'
import DetailsPage from '../components/Projects/DetailsPage'
import { useProject } from '../hooks/useProject'
import LoadingPage from '../components/global/LoadingPage'
import { useNavigate, useParams } from 'react-router-dom'

const Project = () => {

  const { project, isLoading } = useProject()
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (project?.data?.slug && projectSlug !== project?.data?.slug) {
      navigate(`/project/${project.data?.slug}`, { replace: true });
    }
  }, [project, projectSlug, navigate]);
  if (isLoading) return <LoadingPage />

  return (
    <>
      <Header page_name={project?.project_title} cover={project?.project_cover} />
      <DetailsPage data={project} />
    </>
  )
}

export default Project