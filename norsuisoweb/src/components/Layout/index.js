import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'
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
        <div className={classes.root} style={{display:'flex'}}>
            <TopBar />
            <main className={classes.content} style={{backgroundColor:'grey', padding:'0px'}}>
                <div className={classes.toolbar} />
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout
