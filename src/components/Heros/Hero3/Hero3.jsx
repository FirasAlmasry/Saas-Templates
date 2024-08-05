import { Box } from '@mui/material'
import React from 'react'
import Sliders from './Sliders'

const Hero3 = ({data}) => {
  return (
    <>
      <Box position={'relative'} sx={{ mt: '-70px' }}>
        <Sliders data={data} />
      </Box>
    </>
  )
}

export default Hero3