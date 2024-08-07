import { CardContent, CardMedia, Typography, Card } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card2 = ({ services }) => {
    const { slug: serviceSlug, title, description, image } = services || {};
    const navigate = useNavigate()
    return (
        <Card sx={{ maxWidth: 345, my: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", cursor: 'pointer', margin:'10px auto' }}
            className='card reset'
            onClick={() => navigate(`/service/${serviceSlug}`)} >
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                className='flash reset'
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase' }} >
                    {title}
                </Typography>
                <Typography variant="body2" color={'secondary.main'}>
                    {description.slice(0, 225)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Card2
