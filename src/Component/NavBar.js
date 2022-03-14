import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
            <AppBar position="fixed">
                <Toolbar>
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
    
                    <Link color='inherit' href='/'>
                        <Button color="inherit">Réalisation</Button>
                    </Link>
                    <Link color='inherit' href='/'>
                        <Button color="inherit">Contact</Button>
                    </Link>
                    <Link color='inherit' href='/'>
                        <Button color="inherit">Adhésion</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}