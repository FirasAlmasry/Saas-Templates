import { Box } from '@mui/material'
import React from 'react'
import Section from './Section'
import { useTheme } from '@mui/material/styles';
import { contacts } from '../../../constants/contacts';

const Details = ({data}) => {

        const theme = useTheme();

    return (
        <>
            <Box sx={{mx:2, display:'flex', flexDirection:'column', gap:2, backgroundColor:theme.palette.background.form,py:2, px:4, borderRadius:2, height:'100%'}}>
                <Section title={data?.address_title} img={contacts[0]?.img} description={data?.address_info} />
                <Section title={data?.emails_title} img={contacts[1]?.img} description={data?.main_email} supDesc={data?.secondary_email} />
                <Section title={data?.call_title} img={contacts[0]?.img} description={data?.call_number1} supDesc={data?.call_number2} />
            </Box>
        </>
    )
}

export default Details