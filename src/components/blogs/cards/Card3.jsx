import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/helpers';
import blogCover from './../../../assets/blogs/blog.jpg'

const Card3 = ({ blogs = {} }) => {

    const { slug: slugBlog, title, type, date, image } = blogs;

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
            onClick={() => navigate(`/blog/${slugBlog}`)}
        >
            <CardMedia
                    sx={{ height: 240, display: 'flex', flexDirection: 'column-reverse', borderRadius: '16px', }}
                image={type === 'photo' ? image : blogCover}
                    title="green iguana"
                >
                    <CardContent
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            p: 1,
                            pb: 0,
                            backgroundColor: '#fff',
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            height: "4.5rem",
                        }}>
                        <Typography
                            gutterBottom
                            color={'primary.main'}
                            component="div"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {title}
                        </Typography>
                        <Typography color={'secondary.text'} variant="subtitle1">
                            {formatDate(date)}
                        </Typography>
                    </CardContent>
                </CardMedia>
        </Card>
    )
}

export default Card3