import { Box, Typography } from '@mui/material'
import React from 'react'
import Section from './Section'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import ContactSocial from './ContactSocial';

const Details = () => {
    return (
        <>
            <Box sx={{m:2, display:'flex', flexDirection:'column', gap:4}}>
                <Section title={`ADDRESS`} >
                    <Typography variant='body2' color={'secondary.text'} >Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.</Typography>
                </Section>
                <Section title={`EMAIL`} >
                    <Typography variant='body2' color={'secondary.text'} >SturllyTechnologies <br /> PO Box 16122, Collins Street West,<br />Victoria 8007, United States.</Typography>
                </Section>
                <Section title={`CONTACTS`} >
                    <ContactSocial text={'0109897868090'}>
                        <LocalPhoneOutlinedIcon />
                    </ContactSocial>
                    <ContactSocial text={'180 St West Side, New York, USA'}>
                        <LocationOnOutlinedIcon />
                    </ContactSocial>
                    <ContactSocial text={'contact.usa@landmark.com'}>
                        <LocalPostOfficeOutlinedIcon />
                    </ContactSocial>
                </Section>
            </Box>
        </>
    )
}

export default Details