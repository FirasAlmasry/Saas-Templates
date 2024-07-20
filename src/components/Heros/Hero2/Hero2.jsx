import { Box, Container } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'
import HeroText from './HeroText'
import bg from './../../../assets/Hero/slider.png'
const Hero2 = () => {
  return (
    <>
      <Box position={'relative'} sx={{ backgroundImage: `url(${bg})`, height: '75dvh', display: 'flex', alignItems: 'center', backgroundSize: '100% 100%',backgroundPosition:'center', my: 2, position: 'relative', justifyContent:'center' }} >
        <div className="overlay"></div>
        <Container maxWidth={'lg'} sx={{ zIndex:99 }} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%', flexDirection:{md:'row', xs:'column-reverse'} }} >
            <Box sx={{ width: {md:'40%',xs:'100%'} }} >
              <HeroText title={`Create Amazing
Print & Design`} desc={`Beautiful, customizable template, with a ton of web blocks 
to create an amazing website that looks`} btn={`Read More`} />
            </Box>
            <Box sx={{ width: {md:'60%',xs:'100%'} }} >
              <Sliders />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Hero2