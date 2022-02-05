import React from 'react';
import { Box, Container, Divider, List } from '@mui/material';
import Header from '../components/Header'
import CriminalList from '../components/CriminalList';
import SearchBar from '../components/SearchBar';

const dataCriminal = [
    {
        "id": 1,
        "firstName": "Xavier",
        "lastName": "Dupont-De-Ligonès",
        "birthday": "2001-02-11T00:00:00.000Z",
        "sexe": "homme",
        "physicalDescription": "Un grand nez",
        "usernameGame": "Deymons",
        "createdAt": "2021-12-31T22:40:43.703Z",
        "updatedAt": "2021-12-31T22:40:43.703Z",
        "deletedAt": null
    },
    {
        "id": 2,
        "firstName": "Emile",
        "lastName": "Louis",
        "birthday": "2000-02-11T00:00:00.000Z",
        "sexe": "homme",
        "physicalDescription": "Gros lard",
        "usernameGame": "MrDune",
        "createdAt": "2021-12-31T22:44:56.697Z",
        "updatedAt": "2021-12-31T22:44:56.697Z",
        "deletedAt": null
    },
    {
        "id": 3,
        "firstName": "Emile",
        "lastName": "02/01/1995",
        "birthday": "1995-02-11T00:00:00.000Z",
        "sexe": "homme",
        "physicalDescription": "Gros lard, cheveux gris",
        "usernameGame": "Nohko",
        "createdAt": "2021-12-31T22:45:13.708Z",
        "updatedAt": "2021-12-31T23:58:11.006Z",
        "deletedAt": null
    }
];

const CriminalSearch = () => {
    return (
        <div className="CriminalSearch">
            <Box sx={{ display: 'flex' }}>
                <Header page="Casier judiciaire" />
            </Box>
            <Container component="main" maxWidth="l" sx={{ mt: 10 }}>
                <SearchBar />
                <Box sx={{ mt: 1 }}>
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {dataCriminal.map((criminal) => {
                        return (
                            <div key={criminal.id}>
                                <CriminalList criminal={criminal} />
                                <Divider variant="inset" component="li" />
                            </div>
                        )
                    })}
                </List>
                </Box>
            </Container >
        </div>
    );
};

export default CriminalSearch;