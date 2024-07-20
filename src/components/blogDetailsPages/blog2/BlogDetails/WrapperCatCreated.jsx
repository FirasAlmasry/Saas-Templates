import { useTheme } from '@emotion/react';
import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const WrapperCatCreated = ({icon, text}) => {
  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  return (
    <>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }} >
            {
          isMobile ||
              <CardMedia
                  component={'img'}
                  src={icon}
              />
            }
              <Typography color={'secondary.supMain'} >{text}</Typography>
          </Box>
    </>
  )
}

export default WrapperCatCreated