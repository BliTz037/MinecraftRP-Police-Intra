import React from 'react';
import { Card } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { maxWidth } from '@mui/system';

const SearchBar = () => {
    return (
        <Card
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: maxWidth }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Rechercher un criminel"
                inputProps={{ 'aria-label': 'search criminal' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Card>
    );
};

export default SearchBar;