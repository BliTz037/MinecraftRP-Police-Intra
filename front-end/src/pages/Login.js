import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { loginUser } from '../api/user';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

    let navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [Notif, setNotif] = React.useState({
        severity: "error",
        text: "Error !",
        open: false,
    });

    const handlesignIn = async (event) => {
        event.preventDefault();
        loginUser(username, password).then(res => {
            localStorage.setItem('token', res.token.replace(/['"]+/g, ''));
            navigate("/");
            
        }).catch(err => {
            setNotif({
                severity: "error",
                text: `${err}`,
                open: true,
            });
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotif({
            severity: "error",
            text: "Error !",
            open: false,
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: 5,
                    padding: 5,
                    alignItems: 'center',
                }}
            >
                <img src="/logoGouv.png" alt="image" style={{height: 128,}} />
                <Typography component="h1" variant="h5">
                    Se connecter
                </Typography>
                <Box component="form" onSubmit={handlesignIn} noValidate sx={{ pt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        onChange={e => setUsername(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Connexion
                    </Button>
                </Box>
                <Typography textAlign="center">Created by a guy from Tek</Typography>
            </Box>
            <Snackbar open={Notif.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={Notif.severity} sx={{ width: '100%' }}>
                    {Notif.text}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Login;