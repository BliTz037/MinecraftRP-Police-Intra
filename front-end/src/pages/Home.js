import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Header from '../components/Header'

import CardData from '../components/CardData';
import CardTableCrime from '../components/CardTableCrime';
import LocalPolice from '@mui/icons-material/LocalPolice';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';

const Home = () => {
  return (
    <div className="Home">
      <Box sx={{ display: 'flex' }}>
        <Header page="Accueil" />
      </Box>
      <Container component="main" maxWidth="l" sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <CardData dataValue={382} iconData={<FingerprintIcon />} nameData={"Criminel enregistré"} />
          <CardData dataValue={6} iconData={<ArticleIcon />} nameData={"Rapports"} />
          <CardData dataValue={853} iconData={<GavelIcon />} nameData={"Sanctions appliqué"} />
          <CardData dataValue={16} iconData={<LocalPolice />} nameData={"Policiers enregistré"} />
        </Grid>
        <CardTableCrime/>
      </Container>
    </div >
  );
};

export default Home;