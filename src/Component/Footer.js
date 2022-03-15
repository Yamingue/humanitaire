import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Icon, IconButton, Typography } from '@material-ui/core';
import { Instagram, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

    appBar: {
        top: 'auto',
        bottom: 0,
    }
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent='space-between'
                    >
                        <Grid item
                            xs={12}
                            md={4}
                            sm={4}
                        >
                            <Typography color='inherit' variant="h5">
                                Localisation
                            </Typography>
                            <Typography>
                                Ndjamena avenue x
                            </Typography>
                            <Typography>
                                BP 149
                            </Typography>

                        </Grid>
                        <Grid item
                            xs={12}
                            md={4}
                            sm={4}

                        >
                            <Typography color='inherit' variant="h5">
                                Réseaux sociaux
                            </Typography>
                            <Grid
                                direction="row"
                                container
                            >
                                <IconButton aria-label="delete" color='inherit'>
                                    <Icon>facebook</Icon>
                                </IconButton>
                                <IconButton aria-label="delete" color='inherit'>
                                    <Instagram color='wite' />
                                </IconButton>
                                <IconButton aria-label="delete" color='inherit'>
                                    <Twitter color='wite' />
                                </IconButton>

                            </Grid>

                        </Grid>
                        <Grid item
                            xs={12}
                            md={4}
                            sm={4}
                        >
                            <Typography color='inherit' variant="h5">
                                Contact
                            </Typography>
                            <Typography>
                                email@ex.com
                            </Typography>
                            <Typography>
                                66 00 66 00
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}