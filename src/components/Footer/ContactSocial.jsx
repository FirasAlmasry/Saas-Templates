import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components";
const ContactSocial = ({ link, text, children }) => {

    const StyledLink = styled.a`
     border-radius:'50%';
     width:'30px';
     height:'30px';
     line-height:'30px';
     display: 'flex';
     align-items: 'center';
     justify-content: 'center';
     text-decoration: none;
`;

  return (
    <>
    <StyledLink href={link} >
      <Box color={'primary.text'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {children}
        <Typography variant='body2' color={'primary.text'} >{text}</Typography>
      </Box>
    </StyledLink>
    </>
  )
}

export default ContactSocial