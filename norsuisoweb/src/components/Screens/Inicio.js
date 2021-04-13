import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core';

/*Borrar desde aqui---------------------------------------------------------------------------*/
import { Box } from '@material-ui/core';
/*Hasta aca-----------------------------------------------------------------------------------*/

import { TwitchChat, TwitchPlayer } from 'react-twitch-embed';

const useStyles = makeStyles((theme) => ({
    otro: {
        height: 'auto'
    }
}))

const Inicio = () => {
    const classes = useStyles();
    return (
        <div className={classes.otro}>
            Pag de Inicio

            <hr />

            <Button onClick={Prueba}>Boton Prueba Funcion </Button>
            <Typography>a</Typography>

            <Box display='flex'>
                <TwitchPlayer channel="emmanueltc" width="622px" height="350px" muted />
                <TwitchChat channel="emmanueltc" width="325px" height="350px" theme='dark' />
            </Box>


            {/*<Box display="flex">
                <Box flexGrow={1}>
                    <TwitchEmbed channel="emmanueltc" id="emmanueltc" theme="dark" muted onVideoPause={() => console.log(':(')} />
                </Box>
                <Box flexGrow={1}>
                    <TwitchEmbed channel="zafiro_online" id="zafiro_online" theme="dark" muted onVideoPause={() => console.log(':(')} />
                </Box>
            </Box>
            <Box display="flex">
                <TwitchEmbed channel="kayflawersh" id="kayflawersh" theme="dark" muted onVideoPause={() => console.log(':(')} />

                <TwitchEmbed channel="helloblacky" id="helloblacky" theme="dark" muted onVideoPause={() => console.log(':(')} />
            </Box>
            <Box display="flex">
                <TwitchEmbed channel="diagonalj117" id="diagonalj117" theme="dark" muted onVideoPause={() => console.log(':(')} />

                <TwitchEmbed channel="politotrukutru" id="politotrukutru" theme="dark" muted onVideoPause={() => console.log(':(')} />

            </Box> */}


        </div>
    )

    function Prueba() {
        console.log('Prueba de Functions')
    }
}


export default Inicio
