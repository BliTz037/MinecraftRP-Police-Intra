import React from 'react';
import { Typography, ListItemText, ListItemAvatar, Collapse, ListItemButton, List } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ReportList = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemAvatar>
                    <ArticleIcon sx={{ color: 'secondary.main' }} />
                </ListItemAvatar>
                <ListItemText
                    primary={`Rapport A38` || 'N/A'}
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
            <List component="div" sx={{pl: 8}} disablePadding>
                        <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis eros a tortor sollicitudin iaculis nec nec dolor. Donec quis ultrices purus. Aliquam in molestie neque. Fusce tristique dui nec lobortis facilisis. Donec augue arcu, auctor ac nisl ut, auctor malesuada mi. Ut vehicula suscipit nunc in tempus. Suspendisse in consequat justo. Quisque lectus orci, tincidunt a odio quis, lobortis maximus augue. Morbi rhoncus ex massa, a volutpat enim iaculis ut. Sed leo dolor, elementum et nisl eu, sagittis facilisis orci. Sed iaculis turpis vel laoreet accumsan. Vestibulum gravida, nisi in auctor condimentum, massa odio eleifend erat, quis aliquam dui turpis eu lorem. Phasellus condimentum velit est. Proin ultrices blandit turpis, eget vulputate ante finibus euismod. Morbi eleifend sit amet elit sit amet placerat. Nullam interdum, quam nec porta aliquam, urna libero tempus lacus, nec ultricies ante purus non tellus.

Vestibulum pharetra leo quis purus faucibus aliquet. Nunc in nisi sagittis, semper quam et, consectetur quam. Etiam tristique nisl nec sem rhoncus iaculis. Duis semper arcu id orci ultricies eleifend. Sed elementum erat enim, nec semper augue ultrices in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras nisi neque, elementum et consectetur a, luctus vel nisl. Integer elementum sodales nisl nec sollicitudin. Mauris fringilla mi quis quam posuere commodo. Nullam vehicula mauris a magna tempus ornare. Suspendisse blandit enim non est sagittis gravida. Nulla tellus eros, ultrices consectetur consequat quis, rutrum pharetra nisl. Sed efficitur felis pretium diam feugiat, vel dapibus urna feugiat.

Sed justo purus, placerat vitae massa ultrices, finibus aliquam tellus. Pellentesque accumsan lacinia placerat. Mauris id fermentum nisl. Mauris vitae dapibus dolor. Etiam hendrerit eu turpis ut convallis. Integer sit amet diam sed urna commodo hendrerit eget eu quam. Mauris vel metus vitae eros tempor fermentum. Donec aliquet ipsum ac lorem tincidunt, vitae auctor urna sodales.\n\n\n\n

Vestibulum sit amet imperdiet turpis. Nunc eget tincidunt nisi, vel placerat justo. Etiam in nunc sed nulla pellentesque pulvinar. Aenean a interdum ante, id rhoncus magna. Fusce ultricies porta sapien ac dapibus. Mauris viverra volutpat porta. Mauris convallis, leo vitae sagittis lobortis, est orci auctor risus, sit amet rutrum mauris orci at ipsum. Phasellus scelerisque luctus urna, in sodales dolor convallis non. Curabitur condimentum, neque vel dignissim lacinia, nisl eros gravida purus, sit amet egestas neque velit eu urna. Quisque sagittis dapibus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur commodo elit ut ante egestas, et congue sem iaculis. Pellentesque et felis ut lacus tincidunt fringilla. Sed felis dui, pellentesque eu maximus at, tempus sed mi.

Praesent sit amet sodales nulla. Mauris a neque non nibh bibendum facilisis. Vivamus sapien sapien, consequat ac gravida vitae, porta vitae elit. Cras tincidunt neque non sem tempor elementum. Integer velit ipsum, semper non massa in, faucibus lacinia lectus. Maecenas lacinia lacus ac enim volutpat, id consequat urna ultrices. Curabitur quis lacus facilisis, maximus nisi eu, ultricies lectus. Curabitur sed lorem pretium, cursus metus ac, tincidunt enim. Sed porta scelerisque lacus vitae iaculis. Quisque ac nisi cursus, vehicula odio ut, porttitor velit. Nullam eget sagittis orci.`}
                        </Typography>
                </List>
            </Collapse>
        </List>
    );
};

export default ReportList;