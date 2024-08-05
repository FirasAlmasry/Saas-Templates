import { CardMedia } from '@mui/material'
import React from 'react'

const Image3 = ({ img }) => {
    return (
        <CardMedia
            sx={{ height: '20rem', borderRadius: '16px' }}
            image={img}
            title="green iguana"
        />
    )
}

export default Image3