import { Box, Typography } from '@mui/material'
import React from 'react'
import Section from './Section'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContactSocial from './ContactSocial';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Details = ({data}) => {
    return (
        <>
            <Box sx={{m:2, display:'flex', flexDirection:'column', gap:4}}>
                <Section title={data?.address_title} >
                    <Typography variant='body2' color={'secondary.text'} >{data?.address_info}</Typography>
                </Section>
                <Section title={data?.emails_title} >
                    <ContactSocial text={data?.main_email}>
                        <EmailOutlinedIcon />
                    </ContactSocial>
                    <ContactSocial text={data?.secondary_email}>
                        <EmailOutlinedIcon />
                    </ContactSocial>
                </Section>
                <Section title={data?.call_title} >
                    <ContactSocial text={data?.call_number1}>
                        <LocalPhoneOutlinedIcon />
                    </ContactSocial>
                    <ContactSocial text={data?.call_number2}>
                        <LocalPhoneOutlinedIcon />
                    </ContactSocial>
                </Section>
            </Box>
        </>
    )
}

export default Details