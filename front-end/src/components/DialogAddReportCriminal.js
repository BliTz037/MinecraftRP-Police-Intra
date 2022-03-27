import React from 'react';
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DialogAddReportCriminal = (props) => {
    const handleCloseDialogAddReport = () => { props.setValue(false); };

    return (
        <Dialog open={props.open || false} onClose={handleCloseDialogAddReport}>
            <DialogTitle>Ajouter un rapport</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Remplissez le formulaire pour ajouter un rapport concernant cette individu.
                </DialogContentText>
                <Grid container
                    sx={{ pt: 3 }}
                    direction="column" spacing={3}>
                    <Grid item>
                        <TextField
                            fullWidth
                            id="report-title" variant="outlined"
                            label="Titre"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            id="report-content"
                            label="Contenu"
                            placeholder='Contenu'
                            multiline
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialogAddReport}>Annuler</Button>
                <Button onClick={handleCloseDialogAddReport}>Ajouter</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogAddReportCriminal;