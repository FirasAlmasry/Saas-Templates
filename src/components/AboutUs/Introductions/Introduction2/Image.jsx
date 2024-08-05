import { Box, CardMedia } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Image = ({ img }) => {
        const theme = useTheme();

    return (
        <>
            <Box sx={{mx:2}}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {/* الخط العلوي */}
                    <div style={{
                        position: 'absolute',
                        top: -10,
                        right: 0,
                        width: '50%',
                        borderBottom: `2px solid ${theme.palette.primary.main}`,
                    }} />

                    {/* الخط السفلي */}
                    <div style={{
                        position: 'absolute',
                        bottom: -10,
                        left: 0,
                        width: '50%',
                        borderTop: `2px solid ${theme.palette.primary.main}`,
                    }} />

                    <CardMedia
                        component={'img'}
                        src={img}
                        sx={{ width: '100%', height: '20rem', my: 2, objectFit:'contain' }}
                    />
                </div>
            </Box>
        </>
    )
}

export default Image