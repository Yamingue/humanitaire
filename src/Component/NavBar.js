import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import Colors from '../Colors/Color';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:Colors.primary
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor:Colors.primary}} position="fixed"  >
                <Toolbar >
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography> */}
                    <Link color='inherit' href='/#mission'>
                        <Button color="inherit">Mission</Button>
                    </Link>
                    <Link color='inherit' href='/#equipe'>
                        <Button color="inherit">Equipe</Button>
                    </Link>
    
                    <Link color='inherit' href='/#activite'>
                        <Button color="inherit">Activités</Button>
                    </Link>
                    <Link color='inherit' href='/#contactus'>
                        <Button color="inherit">Nous contacter</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}