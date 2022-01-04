import React from 'react';
import { Grid, Typography } from "@mui/material";
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className="NotFound">
            <Container component="main" maxWidth="l" sx={{ pt: 45 }}>
                <Grid
                    container
                    spacing={2}
                    align="center"
                    alignItems="center"
                    justify="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h2" component="h2">
                            Erreur 404
                        </Typography>
                        <Typography>
                            Je me suis perdu chef !
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" onClick={() => {
                            navigate("/");
                        }}>
                            Go Home</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default NotFound;