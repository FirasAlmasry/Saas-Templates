import { Box, CardMedia } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Card2 = ({ projects }) => {
    const { id,name, img } = projects || {};

    const navigate = useNavigate()
    return (
        <Box position={'relative'} onClick={() => navigate(`/project/${id}`)}  className={'parent'} >
            <div className="overlay_project">
                {name}
            </div>
            <CardMedia
                component={'img'}
                src={img}
                sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius:'16px'
                }} />
        </Box>
    )
}

export default Card2