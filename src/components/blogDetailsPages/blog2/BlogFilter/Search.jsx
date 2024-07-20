import React from 'react'

import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../../../../utils/theme';

// render
const Search = () => {
    return (
        <>
            <TextField
                label="Search"
                sx={{
                    '.MuiInputLabel-formControl': {
                        color: theme.palette.secondary.main,
                        fontWeight: '600',
                        fontSize: '1rem'
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton sx={{ 
                                backgroundColor: theme.palette.secondary.main, 
                                color: '#FFF',
                                borderRadius: 2,
                                ':hover': {
                                    backgroundColor: theme.palette.secondary.main,
                                    color: '#FFF',
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