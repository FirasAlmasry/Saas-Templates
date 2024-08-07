import { Box } from '@mui/material'
import React from 'react'
import Section from './Section'
import { useTheme } from '@mui/material/styles';
// import { contacts } from '../../../constants/contacts';
import HomeIcon from '@mui/icons-material/Home'; 
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Details = ({data}) => {

        const theme = useTheme();

    return (
        <>
            <Box sx={{mx:2, display:'flex', flexDirection:'column', gap:1, backgroundColor:theme.palette.background.form,py:2, px:4, borderRadius:2, height:'100%'}}>
                <Section title={data?.address_title} description={data?.address_info} >
                    <HomeIcon sx={{fill:theme.palette.primary.main}} />
                </Section>
                <Section title={data?.emails_title} description={data?.main_email} supDesc={data?.secondary_email} >
                    <ContactMailIcon sx={{fill:theme.palette.primary.main}} />
                </Section>
                <Section title={data?.call_title} description={data?.call_number1} supDesc={data?.call_number2} >
                    <ContactPhoneIcon sx={{fill:theme.palette.primary.main}} />
                </Section>
            </Box>
        </>
    )
}

export default Details