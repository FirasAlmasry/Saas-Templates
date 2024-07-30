import React from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

// render
const Search = () => {
        const theme = useTheme();

    return (
        <>
            <TextField
                label="Search"
                sx={{
                    '.MuiInputLabel-formControl': {
                        color: theme.palette.secondary.text,
                        fontWeight: '600',
                        fontSize: '1rem'
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton sx={{ 
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                                borderRadius: 2,
                                ':hover': {
                                    backgroundColor: theme.palette.secondary.main,
                                    color: theme.palette.primary.main,
                                }
                                }} >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </>
    )
}

export default Search