import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { paths } from '../../../constants'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { SnackbarProvider, useSnackbar } from 'notistack';
import "./login.css";

export default function LoginDialogForm(props) {
    return (
        <SnackbarProvider maxSnack={2}>
            <LoginDialog {...props} />
        </SnackbarProvider>
    );
}

function LoginDialog({ open, handleClose }) {

    const { enqueueSnackbar } = useSnackbar();

    function handleLogin(e) {
        e.preventDefault();
        let [email, password] = e.target.getElementsByTagName('input');
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(() => { handleClose() }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            enqueueSnackbar(errorMessage, { variant: "error" });
            // console.log(errorCode, 'errorLogin', errorMessage);
        });

    }

    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <form onSubmit={handleLogin} noValidate>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Login
                    </Button>
                </DialogActions>
            </form>
            <Link onClick={handleClose} to={paths.signup}>Don't have an account? Sign up</Link>
        </Dialog>

    );
}


