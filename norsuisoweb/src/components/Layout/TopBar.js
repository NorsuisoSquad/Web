import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import MainTabs from './MainTabs';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    tabs: {
        flexGrow: 0,
        marginLeft: theme.spacing(20)
    },
    title: {
        marginRight: '18%'
    },
    logo: {
        flexGrow: 0,
        marginLeft: theme.spacing(70),
    }

}))

const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar display='flex' position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Box display='flex' flexGrow={1}><Typography variant="h6" style={{ color: 'white', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>NorsuisoSquad</Typography></Box>
                    <Box flexGrow={1}><MainTabs className={classes.tabs} /></Box>
                    <Box flexGrow={1} display="flex">
                        <Box flexGrow={1}></Box>
                        <Box><Logo float='right' width={50} className={classes.logo} /></Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
