import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Btn = ({ bg, color, text, path, type = 'button', width = 'fit-content' }) => {
    const { i18n } = useTranslation();
    const btnText = text || (i18n.language === 'en' ? 'See More' : 'المزيد');

    
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
                {btnText}
            </Button>
        </>
    )
}

export default Btn