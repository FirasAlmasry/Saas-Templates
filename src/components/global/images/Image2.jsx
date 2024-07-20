import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Image2 = ({img}) => {
    return (
        <>
            <Box sx={{
                p: 2, borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(250,109,148,1) 0%, rgba(129,75,142,1) 50%, rgba(8,41,136,1) 75%, rgba(183,177,205,1) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20rem', height: '20rem',
                position: 'relative'
            }} >
                <CardMedia
                    component={'img'}
                    sx={{ height: '100%', width: '100%', borderRadius: '50%' }}
                    src={img}
                    title="green iguana"
                />
            </Box>
        </>
    )
}

export default Image2