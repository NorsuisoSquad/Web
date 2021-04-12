import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Container, Box } from '@material-ui/core';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#000000',
        marginTop: '10px'
    },
    footerText:{
        paddingRight: '4px', color: 'white', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center'
    },
    logo: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
    }

}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.footer} maxWidth="max" position="end">
                <Box display="flex" style={{ paddingTop: '5px' }}>
                    <Box flexGrow={1} display="flex">
                        <Box flexGrow={1}></Box>
                        <Box style={{ display: 'flex' }} ><Typography className={classes.footerText} textShadow={10} variant="h6" >Norsuiso</Typography></Box>
                    </Box>
                    <Box display='flex'><Logo className={classes.logo} width={40} /></Box>
                    <Box display='flex' flexGrow={1}><Typography className={classes.footerText} variant="h6" >Squad</Typography></Box>
                </Box>
            </Container>
        </div>
    )
}

export default Footer
