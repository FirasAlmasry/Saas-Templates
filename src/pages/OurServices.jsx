import React, { useState } from 'react'
import Header from '../components/global/headers/Header'
import WrapperSection from '../components/global/WrapperSection'
import GridItems from '../components/global/GridItems'
import { Grid } from '@mui/material'
// import { services } from '../constants/services'
import Card from '../components/Services/cards'
import CustomPagination from '../components/global/CustomPagination'
import { useServices } from '../hooks/useServices'
import LoadingPage from '../components/global/LoadingPage'
import { useNameSection } from '../hooks/useNameSection'

const OurServices = () => {
  
  const [page, setPage] = useState(1);
  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('our-services');

  const { sections } = nameSection?.data || {};

  const Services = {
    serviceSection: sections?.find(section => section.name.includes('Services'))?.component?.[0]?.name,
  };

  const { services, isLoading } = useServices(page)
  if (isLoading || isLoadingNameSection) return <LoadingPage />

  return (
    <>
      <Header page_name={services?.service_title} cover={services?.service_cover} />
      <WrapperSection title={services?.service_title} >
        {services && <GridItems data={services?.data} render={(service) => <Grid item md={4} xs={12} key={service?.slug} ><Card nameSection={Services} service={service}/> </Grid>} />}
        <CustomPagination
          setCurrentPage={setPage}
          count={services?.meta?.last_page}
          currentPage={page} />
      </WrapperSection>
    </>
  )
}

export default OurServices