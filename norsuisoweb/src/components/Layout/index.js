import React from 'react'
import TopBar from './TopBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.root}>
            <TopBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                { children }
            </main>
        </div>
    )
}

export default Layout
