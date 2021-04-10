import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import MainButtons from './MainButtons';
import MainTabs from './MainTabs';

const useStyles = makeStyles((theme) => ({
    appBar: {
        flexGrow: 1,
        justifyContent: 'center'
    }
}))

const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.appBar}>
                    <MainTabs/>
                    {/* <MainButtons /> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
