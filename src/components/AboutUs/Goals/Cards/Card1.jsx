import React from 'react'
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const Card1 = ({ goals }) => {
    const theme = useTheme();

    const Num = {
        color: theme.palette.primary.main,
        fontSize: '32px',
        fontStyle: 'italic',
    }
    const { id, title, description } = goals

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'flex-start', xs: 'center' }, gap: 1, m: 1 }} >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <span style={Num}>{`0${id}.`}</span>
                    <Typography color={'primary.main'} >{title}</Typography>
                </Box>
                <Typography color={'secondary.text'} >{description}</Typography>
            </Box>
        </>
    )
}



export default Card1