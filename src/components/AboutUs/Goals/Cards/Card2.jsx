import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useTheme as themeMobile } from '@emotion/react';

const Card2 = ({ goals }) => {
        const theme = useTheme();

  const { img, title, description } = goals

  const themeM = themeMobile();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  return (
    <Box sx={{ m: 1, height: '100%' }} className='card rotate' >
      <Box
        sx={{
          textAlign: 'center',
          p: 2,
          m: 1,
          borderRadius: '0 30px 0 30px',
          border: `1px solid ${theme.palette.secondary.main}`,
          height: '100%'
        }}>
        <CardMedia
          component={'img'}
          className='rotate' 
          src={img}
          sx={{
            p: 1,
            width: '50px',
            height: '50px',
            borderRadius: '8px',
            objectFit: 'contain',
            margin: 'auto',
          }} />
        <Typography variant={isMobile ? 'h6' : 'h5'} color={'primary.main'} sx={{ fontWeight: 'bold', my: 2 }}>
          {title}
        </Typography>
        <Typography color={'secondary.main'} sx={{ lineHeight: '1.8' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Card2