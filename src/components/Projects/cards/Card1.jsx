import { CardContent, CardMedia, Typography, Card as MuiCard } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';

const Card1 = ({ projects }) => {    
    const theme = useTheme();

    const { slug: projectSlug, description, images } = projects || {};
    const navigate = useNavigate()
    let lng = i18next.language
    return (
        <MuiCard sx={{ maxWidth: 345, my: 2, mx: 'auto', position: 'relative' }} className='translateTop'>
            <CardMedia
                sx={{
                    height: 240,
                    // "::before": {
                    //     content: '""',
                    //     position: 'absolute',
                    //     top: '0',
                    //     left: lng === 'en' ? '100%' : 0,
                    //     transform: 'translateX(-50%)',
                    //     borderWidth: '0 100px 100px 100px', 
                    //     borderStyle: 'solid',
                    //     borderColor: 'transparent transparent white transparent',
                    // } 
                }}
                image={images[0]?.image}
                title="green iguana"
            />
            <CardContent sx={{
                backgroundColor: theme.palette.background.default, height:'150px' }} >
                <Typography variant="body2" color={'secondary.text'}>
                    {description.slice(0,200)}
                </Typography>
                <Typography gutterBottom variant="body2" component="p" color={'primary.main'} sx={{ cursor: 'pointer', mt: 1 }} onClick={() => navigate(`/project/${projectSlug}`)}>
                    {lng === 'en'? ' +Read More' : 'المزيد'}
                </Typography>
            </CardContent>
            
        </MuiCard>
    )
}

export default Card1
