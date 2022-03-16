import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const rows = [
    {
        "id": 1,
        "criminalId": 1,
        "crimeCommitted": "Vol à l'étalage",
        "sanction": "31$, rappel à la loi",
        "description": "Du fromage, des hamburgers et des pains au chocolat ont été volé au magin Leclerc",
        "createdBy": 2,
        "createdAt": "2022-01-01T20:11:52.456Z",
        "updatedAt": "2022-01-01T20:28:50.652Z",
        "deletedAt": null
    },
    {
        "id": 2,
        "criminalId": 1,
        "crimeCommitted": "Homicide volontaire",
        "sanction": "Réclusion criminel (MORT RP)",
        "description": "A tué Monsieur Dupont",
        "createdBy": 2,
        "createdAt": "2022-01-01T20:11:52.456Z",
        "updatedAt": "2022-01-01T20:28:50.652Z",
        "deletedAt": null
    },
    {
        "id": 3,
        "criminalId": 1,
        "crimeCommitted": "Vol à l'étalage",
        "sanction": "31$, rappel à la loi",
        "description": "Du fromage, des hamburgers et des pains au chocolat ont été volé au magin Leclerc",
        "createdBy": 2,
        "createdAt": "2022-01-01T20:11:52.456Z",
        "updatedAt": "2022-01-01T20:28:50.652Z",
        "deletedAt": null
    }
];

const CardTableCrime = (props) => {
    return (
        <Card xs={12} sx={{ mt: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Sanctions récente
                </Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Nom</TableCell>
                                <TableCell align="right">Crime commis</TableCell>
                                <TableCell align="right">Sanction</TableCell>
                                <TableCell align="right">Sanctionné par</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row.createdAt}
                                    </TableCell>
                                    <TableCell align="right">{row.criminalId}</TableCell>
                                    <TableCell align="right">{row.crimeCommitted}</TableCell>
                                    <TableCell align="right">{row.sanction}</TableCell>
                                    <TableCell align="right">{row.createdBy}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CardTableCrime;