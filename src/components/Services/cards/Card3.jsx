import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Card3 = ({ services }) => {
    const { slug: serviceSlug, title,  image } = services || {};
    const navigate = useNavigate()

    return (
        <Box sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            className='card reset'
            onClick={() => navigate(`/service/${serviceSlug}`)}>
            <Box sx={{
                p: 2, borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(250,109,148,1) 0%, rgba(129,75,142,1) 50%, rgba(8,41,136,1) 75%, rgba(183,177,205,1) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '275px', height: '275px',
                position: 'relative'
            }} >
                <CardMedia
                    component={'img'}
                    sx={{ height: 240, width: '240px', borderRadius: '50%' }}
                    src={image}
                    className='flash reset'

                    title="green iguana"
                />
            </Box>
            <Typography gutterBottom variant="h6" component="div" color={'secondary.main'} sx={{ textTransform: 'uppercase', my: 2 }} >
                {title}
            </Typography>
        </Box>
    )
}

export default Card3