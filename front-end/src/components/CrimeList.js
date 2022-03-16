import React from 'react';
import { Typography, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import { Box } from '@mui/system';

const CrimeList = (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <GavelIcon sx={{ color: 'secondary.main' }} />
            </ListItemAvatar>
            <Box>
                <ListItemText
                    primary={`${props.criminal.crimeCommitted} - ${props.criminal.createdAt}` || "N/A"}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: "inline", fontStyle: 'italic' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {`Officer Derrick` || "N/A"}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemText
                    primary={<React.Fragment>
                        <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <Typography
                                sx={{ display: "inline", fontWeight: "bold" }}
                                component="span"
                                variant="body"
                                color="text.primary"
                            >
                                {`${props.criminal.sanction}` || "N/A"}
                            </Typography>

                        </Typography>
                    </React.Fragment>}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body"
                                color="text.primary"
                            >
                                {`${props.criminal.description}` || "N/A"}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </Box>
        </ListItem>
    );
};

export default CrimeList;