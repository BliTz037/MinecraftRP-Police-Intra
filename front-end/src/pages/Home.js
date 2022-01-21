import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Header from '../components/Header'

const Home = () => {
    return (
        <div className="Home">
            <Box sx={{ display: 'flex' }}>
                <Header page="Accueil" />
            </Box>
            <Container component="main" maxWidth="l" sx={{ mt: 10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            </Grid>
            </Container>
        </div>
    );
};

export default Home;