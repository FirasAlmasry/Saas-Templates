import { Badge, Box, Typography } from '@mui/material'
import React from 'react'

const Categories = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }} >
                <Typography color={'secondary.main'} sx={{ p: 2, pt: 0, borderBottom: '1px solid #dddd', width: '100%' }} >Categories</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2 }} >
                    <Typography color={'secondary.main'} sx={{ width: '50%' }}  >catName</Typography>
                    <Badge badgeContent={4} color="primary" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2 }} >
                    <Typography color={'secondary.main'} sx={{ width: '50%' }}  >catName</Typography>
                    <Badge badgeContent={4} color="primary" />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2 }} >
                    <Typography color={'secondary.main'} sx={{ width: '50%' }}  >catName</Typography>
                    <Badge badgeContent={4} color="primary" />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2 }} >
                    <Typography color={'secondary.main'} sx={{ width: '50%' }}  >catName</Typography>
                    <Badge badgeContent={4} color="primary" />
                </Box>
            </Box>
        </>
    )
}

export default Categories