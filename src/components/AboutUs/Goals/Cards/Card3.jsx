import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Card3 = ({ goals }) => {
    const theme = useTheme();

    const { img, title, description } = goals
    return (
        <Box
         className='card rotate' 
        sx={{ m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <Box sx={{
                borderRadius: '50%',
                background: theme.palette.background.card,
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px',
                position: 'relative'
            }} >
                <CardMedia
                    component={'img'}
                    sx={{ objectFit:'scale-down' }}
                    src={img}
                       className='rotate' 
                    title="green iguana"
                />
            </Box>
            <Typography gutterBottom variant="h6" component="div" color={'secondary.main'} sx={{ textTransform: 'uppercase', my: 2 }} >
                {title}
            </Typography>
            <Typography variant="body2" component="p" color={'secondary.text'} textAlign={'center'}>
                {description}
            </Typography>
        </Box>
    )
}

export default Card3