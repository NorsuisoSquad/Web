import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import { Typography/*, Button*/ } from '@material-ui/core';
import { Avatar, Box } from '@material-ui/core';
import { TwitchChat, TwitchPlayer } from 'react-twitch-embed';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#ff0000',
        color: '#ff0000',
        boxShadow: `0 0 0 7px #990000`,
        '&::after': {
            position: 'absolute',
            top: -1,
            left: -1,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '100%': {
            transform: 'scale(4.8)',
            opacity: 0,
        },
        '10%': {
            transform: 'scale(2.4)',
            opacity: 1,
        },
    },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 40,
        height: 40,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    AvatarSize: {
        width: '100px',
        height: '100px'
    },
    otro: {
        height: 'auto'
    },
    player: {
        //display: 'none',
        width: '622px',
        height: '350px'
    },
    chat: {
        width: '325px',
        height: '350px'
    }
}))

const Inicio = () => {
    const classes = useStyles();
    return (
        <div className={classes.otro}>
            <Typography>Pag de Inicio</Typography>
            <hr />

            {/*<Button onClick={}>Boton Prueba Funcion </Button>*/}

            <div>
                <Box id="LiveEmmanuelTC" style={{ display: 'block' }}>
                    <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                        <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                            <Avatar className={classes.AvatarSize} alt="EmmanuelTC" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04fc7ed0-e995-4d2a-82c0-e9bbc2b48dc2-profile_image-300x300.png" />
                        </Badge>
                    </StyledBadge>
                </Box>
                <Box id="Livezafiro_online" style={{ display: 'block' }}>
                    <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                        <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                            <Avatar className={classes.AvatarSize} alt="zafiro_online" src="https://static-cdn.jtvnw.net/jtv_user_pictures/54bd1d20-884b-4919-87aa-26cc58279af2-profile_image-300x300.png" />
                        </Badge>
                    </StyledBadge>
                </Box>
                <Box id="Livekayflawersh" style={{ display: 'block' }}>
                    <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                        <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                            <Avatar className={classes.AvatarSize} alt="kayflawersh" src="https://static-cdn.jtvnw.net/jtv_user_pictures/94af2804-0a66-4e85-9632-eadf6cea7aa7-profile_image-300x300.png" />
                        </Badge>
                    </StyledBadge>
                </Box>
                <Box id="Livehelloblacky" style={{ display: 'block' }}>
                    <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                        <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                            <Avatar className={classes.AvatarSize} alt="helloblacky" src="https://static-cdn.jtvnw.net/jtv_user_pictures/c8859f69-a1dd-4ec6-a45d-32cf6ec8b90b-profile_image-300x300.png" />
                        </Badge>
                    </StyledBadge>
                </Box>
                <Box id="Livepolitotrukutru" style={{ display: 'block' }}>
                    <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                        <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                            <Avatar className={classes.AvatarSize} alt="politotrukutru" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e47d2705-e958-4746-8bd3-9d8033b92fcb-profile_image-300x300.png" />
                        </Badge>
                    </StyledBadge>
                </Box>
                {/*
                <Box id="LiveCambiame" style={{ display: 'block' }}>
                </Box>
                */}
            </div>
            <div>{/*Reproductores de Streamers y Chats*/}
                <Box display='flex'>
                    <TwitchPlayer id="EmmanuelTC" style={{ display: 'block' }} onOffline={EmmanuelTC_Offline} onOnline={EmmanuelTC_Online} channel="emmanueltc" className={classes.player} width='622px' height='350px' muted />
                    <TwitchChat id="EmmanuelTC_Chat" style={{ display: 'block' }} channel="emmanueltc" className={classes.chat} theme='dark' />
                </Box>
                <Box display='flex'>
                    <TwitchPlayer id="zafiro_online" style={{ display: 'block' }} onOffline={zafiro_online_Offline} onOnline={zafiro_online_Online} channel="zafiro_online" className={classes.player} width='622px' height='350px' muted />
                    <TwitchChat id="zafiro_online_Chat" style={{ display: 'block' }} channel="zafiro_online" className={classes.chat} theme='dark' />
                </Box>
                <Box display='flex'>
                    <TwitchPlayer id="kayflawersh" style={{ display: 'block' }} onOffline={kayflawersh_Offline} onOnline={kayflawersh_Online} channel="kayflawersh" className={classes.player} width='622px' height='350px' muted />
                    <TwitchChat id="kayflawersh_Chat" style={{ display: 'block' }} channel="kayflawersh" className={classes.chat} theme='dark' />
                </Box>
                <Box display='flex'>
                    <TwitchPlayer id="helloblacky" style={{ display: 'block' }} onOffline={helloblacky_Offline} onOnline={helloblacky_Online} channel="helloblacky" className={classes.player} width='622px' height='350px' muted />
                    <TwitchChat id="helloblacky_Chat" style={{ display: 'block' }} channel="helloblacky" className={classes.chat} theme='dark' />
                </Box>
                <Box display='flex'>
                    <TwitchPlayer id="politotrukutru" style={{ display: 'block' }} onOffline={politotrukutru_Offline} onOnline={politotrukutru_Online} channel="politotrukutru" className={classes.player} width='622px' height='350px' muted />
                    <TwitchChat id="politotrukutru_Chat" style={{ display: 'block' }} channel="politotrukutru" className={classes.chat} theme='dark' />
                </Box>
                {/*
            <Box display='flex'>
                <TwitchPlayer id="cambiar" style={{display: 'none'}} onOffline={cambiar_Offline} onOnline={cambiar_Online} channel="cambiar" className={classes.player} width='622px' height='350px' muted />
                <TwitchChat id="cambiar_Chat" style={{display: 'none'}} channel="cambiar" className={classes.chat} theme='dark' />
            </Box>
            */}
            </div>

            <div>{/*Normal antes de agregarle las functions de JS para que aparescan o desaparescan si estan Offline o Online*/}
                {/*
                <Box display="flex">
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

                </Box>*/}
            </div>
        </div>
    )

    //---------------------------------------------------------------------------
    function EmmanuelTC_Offline() {
        document.getElementById('EmmanuelTC').style.display = 'block';
        document.getElementById('EmmanuelTC_Chat').style.display = 'block';
        document.getElementById('LiveEmmanuelTC').style.display = 'block';
    }
    function EmmanuelTC_Online() {
        document.getElementById('EmmanuelTC').style.display = 'initial';
        document.getElementById('EmmanuelTC_Chat').style.display = 'initial';
        document.getElementById('LiveEmmanuelTC').style.display = 'initial';
    }
    //---------------------------------------------------------------------------
    function zafiro_online_Offline() {
        document.getElementById('zafiro_online').style.display = 'block';
        document.getElementById('zafiro_online_Chat').style.display = 'block';
        document.getElementById('Livezafiro_online').style.display = 'block';
    }
    function zafiro_online_Online() {
        document.getElementById('zafiro_online').style.display = 'initial';
        document.getElementById('zafiro_online_Chat').style.display = 'initial';
        document.getElementById('Livezafiro_online').style.display = 'initial';
    }
    //---------------------------------------------------------------------------
    function kayflawersh_Offline() {
        document.getElementById('kayflawersh').style.display = 'block';
        document.getElementById('kayflawersh_Chat').style.display = 'block';
        document.getElementById('Livekayflawersh').style.display = 'block';
    }
    function kayflawersh_Online() {
        document.getElementById('kayflawersh').style.display = 'initial';
        document.getElementById('kayflawersh_Chat').style.display = 'initial';
        document.getElementById('Livekayflawersh').style.display = 'initial';
    }
    //---------------------------------------------------------------------------
    function helloblacky_Offline() {
        document.getElementById('helloblacky').style.display = 'block';
        document.getElementById('helloblacky_Chat').style.display = 'block';
        document.getElementById('Livehelloblacky').style.display = 'block';
    }
    function helloblacky_Online() {
        document.getElementById('helloblacky').style.display = 'initial';
        document.getElementById('helloblacky_Chat').style.display = 'initial';
        document.getElementById('Livehelloblacky').style.display = 'initial';
    }
    //---------------------------------------------------------------------------
    function politotrukutru_Offline() {
        document.getElementById('politotrukutru').style.display = 'block';
        document.getElementById('politotrukutru_Chat').style.display = 'block';
        document.getElementById('Livepolitotrukutru').style.display = 'block';
    }
    function politotrukutru_Online() {
        document.getElementById('politotrukutru').style.display = 'initial';
        document.getElementById('politotrukutru_Chat').style.display = 'initial';
        document.getElementById('Livepolitotrukutru').style.display = 'initial';
    }
    //---------------------------------------------------------------------------
    /*function cambioo_Offline() {
        document.getElementById('cambioo').style.display = 'none';
        document.getElementById('cambioo_Chat').style.display = 'none';
    }
    function cambioo_Online() {
        document.getElementById('cambioo').style.display = 'initial';
        document.getElementById('cambioo_Chat').style.display = 'initial';
    }*/
}


export default Inicio
