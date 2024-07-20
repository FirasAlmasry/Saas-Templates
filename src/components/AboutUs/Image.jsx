import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Image = ({ img }) => {
    return (
        <Box sx={{mx:2}} >
            <CardMedia
                component={'img'}
                src={img}
                sx={{ width: '100%', objectFit: 'cover' }}
            />
        </Box>
    )
}

export default Image