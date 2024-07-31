import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Btn from '../../global/Buttons/Btn';
import { useTheme } from '@mui/material/styles';


const Card2 = ({ projects }) => {
    const { id, name, description, img } = projects || {};
    const theme = useTheme();

    return (
        <Box className="card_project">
            <Box className="card-inner">
                <Box className="card-front">
                    <CardMedia
                        component={'img'}
                        src={img}
                        sx={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            borderRadius: '16px',
                        }}
                    />
                </Box>
                <Box className="card-back" 
                    sx={{
                        backgroundColor: theme.palette.background.card, color: theme.palette.secondary.main }} >
                    <Box className="content">
                        <Typography variant='h5'>{name}</Typography>
                        <Typography>{description}</Typography>
                        <Btn path={`/project/${id}`}>
                            See More
                        </Btn>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Card2;
