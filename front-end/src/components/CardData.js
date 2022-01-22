import { Grid } from '@mui/material';
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const CardData = (props) => {
    return (
        <Grid item>
            <Card sx={{ minWidth: 200 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            {props.dataValue || "N/A"}
                        </Typography>
                        <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                            {props.iconData || <FingerprintIcon />}
                        </Avatar>
                    </Box>
                    <Typography color="text.secondary">
                        {props.nameData || "Undefined"}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardData;