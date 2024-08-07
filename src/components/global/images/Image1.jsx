import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Image1 = ({ img }) => {


    return (
        <Box position="relative" sx={{ height: '100%' }}>
            <Box
                sx={{
                    position: 'relative',
                    height: '20rem'
                }}>
                <CardMedia
                    component="img"
                    src={img}
                    alt="About"
                    sx={{ display: 'block', width: '100%', height: '100%' }}
                />
            </Box>
        </Box>
    )
}

export default Image1