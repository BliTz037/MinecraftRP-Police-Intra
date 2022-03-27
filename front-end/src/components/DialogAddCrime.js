import React from 'react';
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const DialogAddCrime = (props) => {
    const handleCloseDialogAddCrime = () => { props.setValue(false); };
    const crimeList = [
        { crime: 'Vol à main armée', sanction: "5 ans de prison" },
        { crime: 'Homicide', sanction: "30 ans de prison" },
        { crime: 'Trafic de stup', sanction: "15 ans de prison" },
    ];

    return (
        <Dialog open={props.open || false} onClose={handleCloseDialogAddCrime}>
            <DialogTitle>Ajouter un crime</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Remplissez le formulaire pour signaler le crime / délit commis par cette individu.
                </DialogContentText>
                <Grid container
                    sx={{ pt: 3 }}
                    direction="column" spacing={3}>
                    <Grid item>
                        <Autocomplete
                            fullWidth
                            freeSolo
                            id="crime-commited"
                            disableClearable
                            options={crimeList.map((option) => option.crime)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Crime commis"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            freeSolo
                            id="sanction-apply"
                            disableClearable
                            options={crimeList.map((option) => option.crime)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Sanction appliqué"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            id="crime-description"
                            label="Description"
                            placeholder='Description'
                            multiline
                            
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialogAddCrime}>Annuler</Button>
                <Button onClick={handleCloseDialogAddCrime}>Ajouter</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogAddCrime;