import { CardContent, CardMedia, Typography, Box as MuiBox, Card as MuiCard } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';
import { formatDate } from '../../../utils/helpers';
import blogCover from './../../../assets/blogs/blog.jpg'
const Card1 = ({ blogs = {} }) => {    
    const theme = useTheme();

    const { slug: slugBlog, title, type, date, image } = blogs;
    const navigate = useNavigate();
    let lng = i18next.language
    return (
        <MuiCard sx={{ display: 'flex', m: 1, cursor: 'pointer', flexDirection: { md: 'row', xs: 'column' } }} onClick={() => navigate(`/blog/${slugBlog}`)}>

            <CardMedia
                component="img"
                sx={{ width: { md: '100%', xs: '100%' }, height: { md: 100
                    , xs: '100%' } }}
                image={type === 'photo' ? image : blogCover}
                alt="Blog cover"
            />
            <MuiBox sx={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
                <CardContent sx={{
                    flex: '1 0 auto', backgroundColor: theme.palette.background.card,
                    "::before": {
                        content: '""',
                        position: 'absolute',
                        top: '100%',
                        left: lng === 'en' ? '100%' : 0,
                        transform: 'translate(-50%, -50%)',
                        borderWidth: '0 125px 125px 125px',
                        borderStyle: 'solid',
                        borderColor: 'transparent transparent white transparent',
                    }
                }}>
                    <Typography component="div" variant="h6" color={'primary.main'}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color={"secondary.text"} component="div">
                        {formatDate(date)}
                    </Typography>
                </CardContent>
            </MuiBox>
        </MuiCard>
    );
};

export default Card1;
