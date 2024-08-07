import React, { useEffect, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useBlogSearch } from '../../../../hooks/useBlogSearch';
import i18next from 'i18next';

// render
const Search = () => {
    const lng = i18next.language
    const theme = useTheme();
    const navigate = useNavigate();
    const { searchBlogs, results } = useBlogSearch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (results) {
            navigate('/blogs', { state: { results } });
        }
    }, [results, navigate]);

    const handleSearch = () => {
        searchBlogs(searchTerm);
    };
    const adornment = (
        <InputAdornment position={lng === 'ar' ? 'start' : 'end'}>
            <IconButton
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.text,
                    borderRadius: 2,
                    ':hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.text,
                    }
                }}
                onClick={handleSearch}
            >
                <SearchIcon />
            </IconButton>
        </InputAdornment>
    );

    return (
        <>
            <TextField
                label={lng === 'en' ? "Search" : 'بحث'}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    '.MuiInputLabel-formControl': {
                        color: theme.palette.secondary.text,
                        fontWeight: '600',
                        fontSize: '1rem'
                    }
                }}
                InputProps={{
                    [lng === 'ar' ? 'startAdornment' : 'endAdornment']: adornment
                }}
            />
        </>
    )
}

export default Search