import { Box, Typography } from '@mui/material'
import React from 'react'
import Social from './Social'

const TouchWithUs = () => {


    return (
        <>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant='h6' color={'primary.main'} mb={1} mt={2}>Stay in touch with us</Typography>
                <Social />
            </Box>
        </>
    )
}

export default TouchWithUs