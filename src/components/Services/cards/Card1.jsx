import { CardContent, CardMedia, Typography, Card as MuiCard } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Card1 = ({ services }) => {

    const theme = useTheme();
    const { slug: serviceSlug, title, description, image } = services || {};

    const navigate = useNavigate()
    
    return (
        <MuiCard
        sx={{ maxWidth: 345, my: 2, mx: 'auto', position: 'relative', cursor: 'pointer' }}
        className='card reset'
            onClick={() => navigate(`/service/${serviceSlug}`)} >
            <CardContent sx={{
                backgroundColor: theme.palette.background.card, 
                height: '200px'
                }}>
                <Typography gutterBottom variant="h5" component="div" color={'secondary.main'}>
                    {title}
                </Typography>
                <Typography variant="body2" color={'secondary.text'}>
                    {description.slice(0,225)}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 240 }}
                image={image}
                className='flash reset'
                title="green iguana"/>
        </MuiCard>
    )
}

export default Card1
