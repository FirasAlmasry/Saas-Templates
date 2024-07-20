import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactSocial from './ContactSocial';
import { Box } from '@mui/material';
import styled from 'styled-components';
import theme from '../../utils/theme';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Social = () => {

    const StyledBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${theme.palette.primary.main};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(-20deg);
  }
`;
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <ContactSocial link={'/'} text={'0109897868090'}>
                    <StyledBox>
                        <InstagramIcon />
                    </StyledBox>
                </ContactSocial>
                <ContactSocial link={'/'} text={'180 St West Side, New York, USA'}>
                    <StyledBox>
                        <FacebookIcon />
                    </StyledBox>
                </ContactSocial>
                <ContactSocial link={'/'} text={'contact.usa@landmark.com'}>
                    <StyledBox>
                        <WhatsAppIcon />
                    </StyledBox>
                </ContactSocial>
            </Box>
        </>
    )
}

export default Social