import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

/*Borrar desde aqui---------------------------------------------------------------------------*/
import { Box } from '@material-ui/core';
import MainTabs from '../Layout/MainTabs';
import Logo from '../Layout/Logo';
/*Hasta aca-----------------------------------------------------------------------------------*/

const useStyles = makeStyles((theme) => ({
/*    borde: {
        padding:'0px',
        margin:'0px',
        backgroundColor:'white'
    },*/
    otro:{
        height:'87.4vh'
    }
}))

const Inicio = () => {
    const classes = useStyles();
    return (
        <div className={/*classes.borde, */classes.otro}>
            Pag de Inicio
{/*Borrar desde aqui---------------------------------------------------------------------------*/}
{/*            <Box display="flex" alignItems="flex-start" p={1} m={1} bgcolor="background.paper" css={{ height: 50 }}>
                <Box flexGrow={1}><Typography variant="h6">NorsuisoSquad</Typography></Box>
                <Box flexGrow={1}><MainTabs className={classes.tabs} /></Box>
                <Box flexGrow={1} display="flex">
                    <Box flexGrow={1}></Box>
                    <Box><Logo float='right' width={50} className={classes.logo} /></Box>
                </Box>
            </Box>*/}
{/*Hasta aca-----------------------------------------------------------------------------------*/}
    </div>
    )
}

export default Inicio
