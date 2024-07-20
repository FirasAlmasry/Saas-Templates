import { Box, Typography } from '@mui/material'
import React from 'react'
import Title from './Title';
import Btn from './Buttons/Btn';

const Description = ({ title, description, supDescription, text = 'See More', path }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} >
            <Title color='primary.main' title={title} align='flex-start' />
            {description && description?.split('.')?.map((part, index) => (
                <Typography key={index} color={'secondary.text'} variant={'body2'} sx={{ lineHeight: 1.8, }}>{part}</Typography>
            ))}
            {supDescription &&
                <Typography color='secondary.text' variant={'body2'} sx={{
                    position: 'relative',
                    lineHeight: 2,
                    ml: 3, '::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: -10,
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '100%',
                        backgroundColor: 'currentColor',
                    }
                }} >
                    {supDescription}
                </Typography>
            }
            {path && <Btn text={text} path={path} />}
        </Box>
    )
}

export default Description