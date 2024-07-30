import { InputLabel } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const FormInput = ({ label, type }) => {
        const theme = useTheme();

    return (
        <>
            <InputLabel htmlFor={type} sx={{ my: 1 }} >
                {label}
            </InputLabel>
            <input
                required
                style={{  backgroundColor: theme.palette.background.input }}
                id={type}
                type={type}
                name={type}
                className='input'/>
            {type === 'message' && <textarea
                required
                style={{ backgroundColor: theme.palette.background.input, height: '150px', padding: '20px', resize: 'none' }} 
                id={type}
                multiline={'true'}
                rows={6}
                variant={type}
                size="medium"
                name={type}
                className='input'
            />}
        </>
    )
}

export default FormInput