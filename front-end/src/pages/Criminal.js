import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Header from '../components/Header'
import NotFound from './NotFound';

const criminal = {
    "id": 1,
    "firstName": "Emile",
    "lastName": "Louis",
    "birthday": "1995-02-01T00:00:00.000Z",
    "sexe": "homme",
    "physicalDescription": "Gros lard",
    "usernameGame": "Nohko",
}

const Criminal = (match) => {
    console.log(useParams());
    const { id } = useParams();

    if (!id)
        return (<NotFound />);

    return (
        <div className="CriminalSearch">
            <Box sx={{ display: 'flex' }}>
                <Header page={id} />
            </Box>
            <Container component="main" maxWidth="l" sx={{ mt: 10 }}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        sx={{
                            height: 164,
                            width: 164,
                            border: 1,
                            borderRadius: 1,
                            backgroundPosition: "center",
                            backgroundImage: `url(${"https://img.myloview.fr/stickers/mugshot-background-police-lineup-wall-for-short-suspects-400-263154670.jpg"})`,
                        }}
                        alt="The house from the offer."
                        src={`https://minotar.net/bust/BliTz_37/100.png`}
                    />
                    <Card>
                        <CardContent>
                            <Typography component="div">
                                {`Identité: ${criminal.firstName} ${criminal.lastName}`}
                            </Typography>
                            <Typography component="div">
                                {`Sexe: ${criminal.sexe}`}
                            </Typography>
                            <Typography component="div">
                                {`Date de naissance: ${criminal.birthday}`}
                            </Typography>
                            <Typography component="div">
                                {`Description physique: ${criminal.physicalDescription}`}
                            </Typography>
                            <Typography component="div" sx={{ fontWeight: 'bold' }}>
                                {`Status: RECHERCHER`}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Container >
        </div >
    );
};

export default Criminal