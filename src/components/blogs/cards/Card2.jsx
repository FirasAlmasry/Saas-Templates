import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card2 = ({ blogs = {} }) => {

    const { id, title, type, date, img } = blogs;

    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: '100%', m: 2, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)", cursor: 'pointer'}} onClick={() => navigate(`/blog/${id}`)}  >
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" color={'primary.main'} sx={{ textTransform: 'uppercase' }} >
                    {title}
                </Typography>
                <Typography variant="subtitle1" color={"secondary.main"} component="div">
                    {type}, {date}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Card2