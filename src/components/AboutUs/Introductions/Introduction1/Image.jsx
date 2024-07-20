import { Box, CardMedia } from '@mui/material'
import React from 'react'
import i18next from 'i18next';


const Image = ({img}) => {

    let lng = i18next.language

    return (
        <Box position="relative">
            <Box
                sx={{
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '10%',
                        left: lng === 'en' ? '100%' : 0,
                        transform: 'translateX(-75%) rotate(270deg)',
                        borderWidth: '0 100px 100px 100px', // Adjust based on your requirement
                        borderStyle: 'solid',
                        borderColor: 'transparent transparent white transparent',
                        // transform: 'rotate(270deg)'
                    }
                }}
            >
                <CardMedia
                    component="img"
                    src={img}
                    alt="About"
                    sx={{ display: 'block', width: '100%' }}
                />
            </Box>
        </Box>
    )
}

export default Image