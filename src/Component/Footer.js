import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Icon, IconButton, Typography } from '@material-ui/core';
import { Instagram, Twitter } from '@material-ui/icons';
import Colors from '../Colors/Color';

const useStyles = makeStyles((theme) => ({

    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor:Colors.primary
    }
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent='space-between'
                    >
                        <Grid item
                            xs={4}
                            md={4}
                            sm={4}
                        >
                            <Typography style={{ color: '#000000' }} variant="h6">
                                Adresse
                            </Typography>
                            <Typography variant='subtitle2' >
                                Ndjamena avenue xy
                            </Typography>
                            <Typography variant='subtitle2'>
                                BP 149
                            </Typography>
                            <Typography variant='subtitle2'>
                                Rue 2222 df
                            </Typography>

                        </Grid>
                        <Grid item
                            xs={4}
                            md={4}
                            sm={4}

                        >
                            <Typography style={{ color: '#000000' }} color='inherit' variant="h6">
                                Social
                            </Typography>
                            <Grid
                                direction="row"
                                container
                            >
                                <IconButton aria-label="delete" color='inherit'>
                                    <Icon>facebook</Icon>
                                </IconButton>
                                <IconButton aria-label="delete" color='inherit'>
                                    <Instagram color='inherit' />
                                </IconButton>
                                <IconButton aria-label="delete" color='inherit'>
                                    <Twitter color='inherit' />
                                </IconButton>

                            </Grid>

                        </Grid>
                        <Grid item
                            xs={4}
                            md={4}
                            sm={4}
                        >
                            <Typography style={{ color: '#000000' }} color='inherit' variant="h6">
                                Contact
                            </Typography>
                            <Typography variant='subtitle2'>
                                email@ex.com
                            </Typography>
                            <Typography variant='subtitle2'>
                                66 00 66 00
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar 
                style={{
                    backgroundColor:'#373E40'
                }}
                >
                    <Grid container >
                        <Grid xs={6}>
                        ©2022 
                        </Grid>
                        <Grid xs={6}>
                          Recherche Humanitaire
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}