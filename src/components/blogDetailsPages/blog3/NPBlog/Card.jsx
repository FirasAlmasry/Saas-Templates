import { Box, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data, N_P, dir }) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { image, title, slug } = data
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexDirection: dir,
                borderRadius: '8px',
                p:2,
                ':hover': {
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }
            }} onClick={() => navigate(`/blog/${slug}`)} >
                <Box sx={{ borderRadius: '8px', width: '125px', height: '100px' }}>
                    <CardMedia
                        className='flash'
                        component={'img'}
                        sx={{ height: '100%', borderRadius: '8px', cursor: 'pointer' }}
                        src={image} />
                </Box>
                <Box>
                    <Typography
                        variant={'h6'}
                        color={'secondary.text'}
                        sx={{ ':hover': { color: theme.palette.primary.main }, cursor: 'pointer' }}>{N_P}</Typography>
                    <Typography variant={'body1'} color={'primary.main'} sx={{ ':hover': { color: theme.palette.secondary.main }, cursor: 'pointer' }}>{title}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Card