import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button,
    Modal
} from '@material-ui/core';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import { useDispatch, useSelector, connect } from 'react-redux';
import firebase from 'firebase';
import { logout } from '../../Redux/actions';

const useStyles = makeStyles(theme => ({
    logo: {
        padding: theme.spacing(1),
        paddingRight: theme.spacing(3),
        width: '4rem',
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive"
    },
    links: {
        marginLeft: theme.spacing(5),
    }
}));

function Navigation(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const authState = useSelector(state => state.authState.auth);

    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    // Dispatches logout state to the store and logs out the user in firebase
    const updateLogoutState = () => {
        firebase.auth().signOut()
            .then(status => {
                if (status) logout();
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='primary' className={classes.heading}>LUNAR BANQUET 2020</Typography>
                    {/* <Button color='inherit' onClick={logout()}>Log Out</Button> */}
                    <Typography color="secondary">
                        <Button href="/" className={classes.links}>HOME</Button>
                        <Button href="/stream" className={classes.links}>STREAM</Button>
                        <Button href="/shop" className={classes.links}>SHOP</Button>
                        <Button href="/committee" className={classes.links}>COMMITTEE</Button>
                        { authState ? <Button className={classes.links} onClick={updateLogoutState}>LOGOUT</Button> :
                        <Button className={classes.links} onClick={toggleOpen}>LOGIN</Button> }
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Modal
                open={open}
                onClose={toggleOpen}
                style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LoginPopup />
            </Modal>
            
        </div>
    );
}

export default connect(null, logout)(Navigation);