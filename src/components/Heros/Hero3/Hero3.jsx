import { Box } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'
import HeroText from './HeroText'

const Hero3 = () => {
  return (
    <>
        <Box position={'relative'} >
            <div className="overlay"></div>
            <Box>
                <Sliders />
                <HeroText title={`Welcome to`} desc={`Ard Alsafa Tech.Serv.`} btn={`Read More`} />
            </Box>
        </Box>
    </>
  )
}

export default Hero3