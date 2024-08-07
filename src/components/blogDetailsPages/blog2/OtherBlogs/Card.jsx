import { Box, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'
import { formatDate } from '../../../../utils/helpers'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {

    const theme = useTheme()
    const navigate = useNavigate()
    const { image, title, date, slug } = data

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap:1, borderBottom:`1px solid ${theme.palette.primary.main}` }} onClick={()=> navigate(`/blog/${slug}`)} >
                <Box sx={{ borderRadius: '8px', width: '125px', height: '75px', mb:1}}>
                    <CardMedia
                        className='flash'
                        component={'img'}
                        sx={{ height: '100%', borderRadius: '4px', cursor: 'pointer' }}
                        src={image} />
                </Box>
                <Box>
                    <Typography variant={'body1'} color={'primary.main'} sx={{':hover':{color:theme.palette.secondary.main}, cursor:'pointer'}}>{title}</Typography>
                    <Typography variant={'subtitle2'} color={'secondary.text'} >{formatDate(date)}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Card