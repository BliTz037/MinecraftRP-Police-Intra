import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPolice from '@mui/icons-material/LocalPolice';
import { useNavigate } from 'react-router';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const Header = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const NavItems = [
        {
            text: "Accueil",
            icon: <HomeIcon color="secondary" />,
            path: '/'
        },
        {
            text: "Casier judiciaire",
            icon: <FingerprintIcon color="secondary" />,
            path: '/criminal'
        },
        {
            text: "Rapports",
            icon: <ArticleIcon color="secondary" />,
            path: '/reports'
        },
        {
            text: "Code pénale",
            icon: <GavelIcon color="secondary" />,
            path: '/law'
        },
        {
            text: "Profil",
            icon: <AccountCircleOutlined color="secondary" />,
            path: '/profil'
        },
        {
            text: "Déconnexion",
            icon: <LogoutIcon color="secondary" />,
            path: '/logout'
        }
    ];

    const NavAdminItems = [
        {
            text: "Votre brigade",
            icon: <LocalPolice color="secondary" />,
            path: '/'
        },
        {
            text: "Paramètres",
            icon: <SettingsIcon color="secondary" />,
            path: '/'
        }
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="Header">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {`Police Nationale - ${props.page || ""}`}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
                variant="persistent"
                anchor="left"
                open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {NavItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {NavAdminItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Header;