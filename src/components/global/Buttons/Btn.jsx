import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const Btn = ({ bg, color, text = 'See More', path, type = 'button', width= 'fit-content' }) => {
    const navigate = useNavigate() 
    const theme = useTheme();

    return (
        <>
            <Button
                type={type}
                onClick={() => navigate(path)}
                size="large"
                sx={{
                    background: bg ? bg : theme.palette.primary.main,
                    color: color ? color : theme.palette.primary.text, textTransform: 'capitalize', px: 4, py: 1, ":hover": {
                        background: theme.palette.secondary.text,
                        color: theme.palette.secondary.main,
                    },
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    width: width,
                    fontWeight:400
                }} >
                {text}
            </Button>
        </>
    )
}

export default Btn