import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Image = ({ img }) => {
    return (
        <Box sx={{mx:2}} >
            <CardMedia
                component={'img'}
                src={img}
                sx={{ width: '100%', objectFit: 'contain', height:'20rem' }}
            />
        </Box>
    )
}

export default Image