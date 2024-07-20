import React from 'react'
import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Title from './Title';

const WrapperSection = ({ title, description, secColor, color, children }) => {
  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
  return (
    <>
      <Container maxWidth={'lg'} >
        <Box sx={{ my:10, display: 'flex', flexDirection: 'column', gap: { md: 1.7,xs:1 }, alignItems: 'center', position: 'relative', zIndex: 11, textAlign: isMobile && 'center' }} >
          {title && <Title title={title} color={color && color} description={description}
            secColor={secColor && secColor} />}
          {children}
        </Box>
      </Container>
    </>
  )
}

export default WrapperSection