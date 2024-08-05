import React from 'react'
import Header from '../components/global/headers/Header'
import DetailsPage from '../components/Services/DetailsPage'
import { useService } from '../hooks/useService'
import LoadingPage from '../components/global/LoadingPage'

const Service = () => {
  
  const { service, isLoading } = useService()
  if (isLoading) return <LoadingPage />

  return (
    <>
      <Header cover={service?.service_cover}/>
      <DetailsPage data={service} />
    </>
  )
}

export default Service