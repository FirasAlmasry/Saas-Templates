import { CardContent, CardMedia, Typography, Card } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card2 = ({ services }) => {
    const { id, title, description, img } = services || {};
    const navigate = useNavigate()
    return (
        <Card sx={{ maxWidth: 345, my: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", cursor: 'pointer' }}
            className='card grayscale reset'
            onClick={() => navigate(`/service/${id}`)} >
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                className='blur reset'
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase' }} >
                    {title}
                </Typography>
                <Typography variant="body2" color={'secondary.main'}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Card2
