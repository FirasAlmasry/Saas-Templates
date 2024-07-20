import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../../utils/theme';

const PopularTags = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }} >
                <Typography color={'secondary.main'} sx={{ px: 2, width: '100%' }}  >{`Popular `}
                    <span style={{ color: theme.palette.secondary.text }} >{`Tags`}</span>
                </Typography>
                <Box sx={{ display:'flex', flexWrap:'wrap', gap:1, alignItems:'center', p:1 }} >
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                    <Typography color={'primary.main'} sx={{ backgroundColor:theme.palette.background.section, borderRadius:'8px', p:'2px 8px' }} >
                        Name
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default PopularTags