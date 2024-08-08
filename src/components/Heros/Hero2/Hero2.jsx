import { Box, Container } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'
import bg from './../../../assets/Hero/slider.png'
const Hero2 = ({data}) => {
  return (
    <>
      <Box position={'relative'} sx={{ backgroundImage: `url(${bg})`, height: { md: '75dvh', xs:'100dvh' }, display: 'flex', alignItems: 'center', backgroundSize: '100% 100%', backgroundPosition: 'center', my: 2, position: 'relative', justifyContent: 'center', mt: '-70px' }} >
        <div className="overlay"></div>
        <Container maxWidth={'lg'} sx={{ zIndex:99 }} >
          <Sliders data={data}/>
        </Container>
      </Box>
    </>
  )
}

export default Hero2