import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card3 = ({ blogs = {} }) => {

    const { id, title, type, date, img } = blogs;

    const navigate = useNavigate();
    return (
        <Card
            sx={{
                maxWidth: '100%',
                my: 2,
                mx: 4,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)",
                cursor: 'pointer',
                position: 'relative',
                overflow: 'visible',
                borderRadius: '16px',
            }}
            onClick={() => navigate(`/blog/${id}`)}
        >
            <CardMedia
                sx={{ height: 240, display: 'flex', flexDirection: 'column-reverse', borderRadius: '16px', }}
                image={img}
                title="green iguana"
            >
                <CardContent
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '-7%', 
                        width: 'calc(100%)',  
                        p: 1,
                        pb: 0,
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        height: "4.5rem",
                    }}
                >
                    <Typography
                        gutterBottom
                        color={'primary.main'}
                        component="div"
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {title}
                    </Typography>
                    <Typography color={'secondary.supMain'} variant="subtitle1">
                        {type}, {date}
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>

    )
}

export default Card3