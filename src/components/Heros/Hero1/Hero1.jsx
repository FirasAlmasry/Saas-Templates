import { Box } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'
import HeroText from './HeroText'

const Hero1 = () => {
  return (
    <>
        <Box position={'relative'} sx={{mt:'-70px'}} >
            <div className="overlay"></div>
            <Box>
            <Sliders />
          <HeroText title={`WELCOME TO CONSTRUCTION`} desc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
`} btn={`See More`} />
            </Box>
        </Box>
    </>
  )
}

export default Hero1