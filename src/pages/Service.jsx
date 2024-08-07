import React, { useEffect } from 'react'
import Header from '../components/global/headers/Header'
import DetailsPage from '../components/Services/DetailsPage'
import { useService } from '../hooks/useService'
import LoadingPage from '../components/global/LoadingPage'
import { useNavigate, useParams } from 'react-router-dom'

const Service = () => {
  
  const { service, isLoading } = useService()
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (service?.data?.slug && serviceSlug !== service?.data?.slug) {
      navigate(`/service/${service.data?.slug}`, { replace: true });
    }
  }, [service, serviceSlug, navigate]);
  if (isLoading) return <LoadingPage />

  return (
    <>
      <Header page_name={service?.service_title} cover={service?.service_cover}/>
      <DetailsPage data={service} />
    </>
  )
}

export default Service