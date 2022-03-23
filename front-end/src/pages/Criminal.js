import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Container, Divider, Fab, Grid, List, Typography, Tabs, Tab } from '@mui/material';
import Header from '../components/Header'
import NotFound from './NotFound';
import CrimeList from '../components/CrimeList';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GavelIcon from '@mui/icons-material/Gavel';
import ArticleIcon from '@mui/icons-material/Article';
import ReportList from '../components/ReportList';

const actions = [
    { icon: <GavelIcon />, name: 'Crime' },
    { icon: <ArticleIcon />, name: 'Rapport' },
];

const dataCriminal = [
    {
        "id": 1,
        "criminalId": 1,
        "crimeCommitted": "Vol aggravé",
        "sanction": "15 000$ / 2 ans de prison",
        "description": "Véhicule volé: Peugeot 406 noir\nImmatriculation: AB-555-5ZE",
        "createdBy": 1,
        "createdAt": "2022-03-16",
        "updatedAt": "2022-03-16T10:35:20.015Z",
        "deletedAt": null
    },
    {
        "id": 2,
        "criminalId": 1,
        "crimeCommitted": "Vol aggravé",
        "sanction": "6 mois de prison avec sursis, une obligation de ce soigné et suspension du permis de conduire",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "createdBy": 1,
        "createdAt": "2022-03-16",
        "updatedAt": "2022-03-16T10:35:20.015Z",
        "deletedAt": null
    },
    {
        "id": 3,
        "criminalId": 1,
        "crimeCommitted": "Vol aggravé",
        "sanction": "15 000$ / 2 ans de prison",
        "description": "Véhicule volé: Peugeot 406 noir\nImmatriculation: AB-555-5ZE",
        "createdBy": 1,
        "createdAt": "2022-03-16",
        "updatedAt": "2022-03-16T10:35:20.015Z",
        "deletedAt": null
    },

];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                    spacing={2}
                >
                    <Grid item>
                        <Box
                            xs={10}
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
                    </Grid>
                    <Grid item>
                        <Card xs={10}>
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
                                    {`Status: Inconnu`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', pt: 8 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Crimes commis" />
                        <Tab label="Rapports" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <List sx={{ bgcolor: "background.paper" }}>
                        {dataCriminal.map((criminal) => {
                            return (
                                <div key={criminal.id}>
                                    <CrimeList criminal={criminal} />
                                    <Divider variant="inset" component="li" />
                                </div>
                            )
                        })}
                    </List>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <List sx={{ bgcolor: "background.paper" }}>
                        {dataCriminal.map((criminal) => {
                            return (
                                <div key={criminal.id}>
                                    <ReportList report={criminal} />
                                    <Divider variant="inset" component="li" />
                                </div>
                            )
                        })}
                    </List>
                </TabPanel>
                <SpeedDial
                    style={{
                        margin: 0,
                        top: 'auto',
                        right: 20,
                        bottom: 20,
                        left: 'auto',
                        position: 'fixed',
                    }}
                    ariaLabel="SpeedDial basic example"
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Container >
        </div >
    );
};

export default Criminal