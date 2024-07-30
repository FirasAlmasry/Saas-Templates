import { Box } from '@mui/material'
import React from 'react'
import Section from './Section'
import { contacts } from '../../../constants/contacts';
import { useTheme } from '@mui/material/styles';

const Details = () => {
            const theme = useTheme();

    return (
        <>
            <Box sx={{ mx: 2, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: theme.palette.background.form, py: 2, px: 4, borderRadius: 2, height: '100%' }}>
                {contacts?.map(contact => <Section key={contact?.name} title={contact?.name} img={contact?.img} description={contact?.description} />)}
            </Box>
        </>
    )
}

export default Details