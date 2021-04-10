import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MainTabs from './MainTabs';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    tabs: {
        flexGrow: 0 ,
        marginLeft: theme.spacing(20)
    },
    title:{
        marginRight: '18%'
    },
    logo:{
        flexGrow: 0,
        marginLeft: theme.spacing(70),
    }

}))

const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>NorsuisoSquad</Typography>
                <MainTabs className={classes.tabs} />
                <Logo width={50} className={classes.logo}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
