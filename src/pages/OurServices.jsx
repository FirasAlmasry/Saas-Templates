import React from 'react'
import Header from '../components/global/headers/Header'
import WrapperSection from '../components/global/WrapperSection'
import GridItems from '../components/global/GridItems'
import { Grid } from '@mui/material'
import { services } from '../constants/services'
import Card from '../components/Services/cards'

const OurServices = () => {

  return (
    <>
      <Header />
      <WrapperSection title={`Services`} >
        {services && <GridItems data={services} render={(service) => <Grid item md={4} xs={12} key={service?.id} ><Card service={service}/> </Grid>} />}
      </WrapperSection>
    </>
  )
}

export default OurServices