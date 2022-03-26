import React from 'react';
import { Typography, Collapse, ListItemButton, List, ListItemText, ListItemAvatar } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CrimeList = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemAvatar>
                    <GavelIcon sx={{ color: 'secondary.main' }} />
                </ListItemAvatar>
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
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItemText
                    sx={{ pl: 9 }}
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
            </Collapse>
        </List>
    );
};

export default CrimeList;