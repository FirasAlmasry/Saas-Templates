import { Box } from '@mui/material'
import React from 'react'

const TouchWithUs = ({children}) => {


    return (
        <>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                {children}
            </Box>
        </>
    )
}

export default TouchWithUs