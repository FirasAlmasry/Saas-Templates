import { Box } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'

const Hero1 = ({data}) => {
  return (
    <>
      <Box position={'relative'} sx={{ mt: '-70px' }} >
        <Sliders data={data} />
      </Box>
    </>
  )
}

export default Hero1