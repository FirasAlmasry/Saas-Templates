import { CardContent, CardMedia, Typography, Card as MuiCard } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import i18next from "i18next";

const Card1 = ({ services }) => {
    const theme = useTheme();

    const { id, icon, title, description, img } = services || {};

    const navigate = useNavigate()
    let lng  = i18next.language
    return (
        <MuiCard sx={{ maxWidth: 345, my: 2, mx: 'auto', position: 'relative', cursor: 'pointer' }} onClick={() => navigate(`/service/${id}`)} >
            <CardContent sx={{
                backgroundColor: theme.palette.background.card, "::before": {
                    content: '""',
                    position: 'absolute',
                    top: '0', // Adjust based on your requirements
                    left: lng === 'en'?'100%':0,
                    transform: 'translateX(-50%)',
                    borderWidth: '0 100px 100px 100px', // Adjust based on your requirement
                    borderStyle: 'solid',
                    borderColor: 'transparent transparent white transparent',
                }}} >
                <CardMedia
                    component={'img'}
                    src={icon}
                    title="green iguana"
                    sx={{width: 100, height:100, objectFit:'contain'}}
                />
                <Typography gutterBottom variant="h5" component="div" color={'secondary.main'}>
                    {title}
                </Typography>
                <Typography variant="body2" color={'secondary.text'}>
                    {description}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 240 }}
                image={img}
                title="green iguana"
            />
        </MuiCard>
    )
}

export default Card1
