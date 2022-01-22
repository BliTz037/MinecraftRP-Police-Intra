import React from 'react';

import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const CriminalList = (props) => {
    return (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.criminal.usernameGame} src={`https://minotar.net/avatar/${props.criminal.usernameGame || "Notch"}`} />
        </ListItemAvatar>
        <ListItemText
          primary={`${props.criminal.firstName} ${props.criminal.lastName}` || "Anonymous"}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`${props.criminal.sexe} | ${props.criminal.birthday}` || "Anonymous"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    );
};

export default CriminalList;