import { CardContent, CardMedia, Typography, Box as MuiBox, Card as MuiCard } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../utils/theme';
import i18next from 'i18next';

const Card1 = ({ blogs = {} }) => {
    const { id,title, type, date, img } = blogs;
    const navigate = useNavigate();
    let lng = i18next.language
    return (
        <MuiCard sx={{ display: 'flex', m: 1, cursor: 'pointer', flexDirection: { md: 'row', xs: 'column' } }} onClick={() => navigate(`/blog/${id}`)}>
            <CardMedia
                component="img"
                sx={{ width: {md:200,xs:'100%'} }}
                image={img}
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
                    <Typography component="div" variant="h6" color={'secondary.main'}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color={"secondary.main"} component="div">
                        {type}, {date}
                    </Typography>
                </CardContent>
            </MuiBox>
        </MuiCard>
    );
};

export default Card1;
