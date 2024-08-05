import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactSocial from './ContactSocial';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import SnapIcon from './../../assets/footer/Snap.svg'; // Import SVG as a path

const Social = ({ data }) => {
    const theme = useTheme();

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
     color: ${theme.palette.footer.link};
  }

  &:hover svg {
    transform: rotate(-20deg) scale(1.2);
  }
`;
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                {data?.instagram_url &&
                    <ContactSocial link={data?.instagram_url} text={data?.instagram_url}>
                        <StyledBox>
                            <InstagramIcon />
                        </StyledBox>
                    </ContactSocial>
                }
                {data?.facebook_url &&
                    <ContactSocial link={data?.facebook_url} text={data?.facebook_url}>
                        <StyledBox>
                            <FacebookIcon />
                        </StyledBox>
                    </ContactSocial>
                }
                {data?.linkedin_url &&
                    <ContactSocial link={data?.linkedin_url} text={data?.linkedin_url}>
                        <StyledBox>
                            <LinkedInIcon />
                        </StyledBox>
                    </ContactSocial>
                }
                {data?.whatsapp_number &&
                    <ContactSocial link={data?.whatsapp_number} text={data?.whatsapp_number}>
                        <StyledBox>
                            <WhatsAppIcon />
                        </StyledBox>
                    </ContactSocial>
                }
                {/* {data?.snapchat_url &&
                    <ContactSocial link={data?.snapchat_url} text={data?.snapchat_url}>
                        <StyledBox>
                            <img src={SnapIcon} alt="Snapchat" /> 
                        </StyledBox>
                    </ContactSocial>
                } */}
            </Box>
        </>
    )
}

export default Social