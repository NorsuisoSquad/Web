import React from 'react'
import Badge from '@material-ui/core/Badge'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Avatar/*, Box*/ } from '@material-ui/core';
/*import { TwitchChat, TwitchPlayer } from 'react-twitch-embed';*/


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
    }
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 40,
        height: 40,
        border: `2px solid ${theme.palette.background.paper}`,
    },
    badgeOffline: {
        backgroundColor: '#cccccc',
        color: '#cccccc',
        boxShadow: `0 0 0 7px #999999`,
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
    }
}))(Avatar);

const Miembros = () => {
    const classes = useStyles();
    return (
        <div>
            Pag de Miembros
            <hr />
            <div>
                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="EmmanuelTC" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04fc7ed0-e995-4d2a-82c0-e9bbc2b48dc2-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="zafiro_online" src="https://static-cdn.jtvnw.net/jtv_user_pictures/54bd1d20-884b-4919-87aa-26cc58279af2-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="kayflawersh" src="https://static-cdn.jtvnw.net/jtv_user_pictures/94af2804-0a66-4e85-9632-eadf6cea7aa7-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="helloblacky" src="https://static-cdn.jtvnw.net/jtv_user_pictures/c8859f69-a1dd-4ec6-a45d-32cf6ec8b90b-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="politotrukutru" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e47d2705-e958-4746-8bd3-9d8033b92fcb-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Avatar className={classes.AvatarSize} alt="diagonalj117" src="https://static-cdn.jtvnw.net/jtv_user_pictures/dcda78d1-588b-4b05-8bec-f64932545315-profile_image-300x300.png" />
                </StyledBadge>


                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Avatar className={classes.AvatarSize} alt="wakandy30" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d39047d3-fc63-4462-95d0-07eb2ad3b223-profile_image-300x300.png" />
                </StyledBadge>

                <br /><br />
            </div>
            <div>
{/*            <Box id='aaa' channel="kayflawersh" onOffline={kayOff} style={{ display: 'initial' }}>
                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="EmmanuelTC" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04fc7ed0-e995-4d2a-82c0-e9bbc2b48dc2-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

            </Box>

            <TwitchPlayer id="kayflawersh" style={{ display: 'none' }} onOffline={kayOff} channel="kayflawersh" width='622px' height='350px' muted />
*/}
            </div>
        </div>
    )
    /*function kayOff() {
        document.getElementById('aaa').style.display = 'none';
    }*/
}

export default Miembros
