import React, { useState, useRef } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputLabel,
    InputAdornment,
    IconButton,
    FormControl,
    Input
} from '@material-ui/core';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import { paths } from '../../../constants'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useSnackbar } from 'notistack';
import "./login.css";


// export default function LoginDialogForm(props) {
//     return (
//         <SnackbarProvider maxSnack={3}>
//             <LoginDialog {...props} />
//         </SnackbarProvider>
//     );
// }

export default function LoginDialogForm({ open, handleClose, setIsLoading }) {

    const [showPassword, setShowPassword] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    function handleLogin(e) {
        e.preventDefault();
        let [email, password] = e.target.getElementsByTagName('input');
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(() => handleClose()).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            enqueueSnackbar(errorMessage, { variant: "error" });
            // console.log(errorCode, 'errorLogin', errorMessage);
        })
    }


    const handleMouseDownPassword = e => {
        e.preventDefault();
    };

    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className="title">Log In</DialogTitle>
            <form onSubmit={handleLogin} noValidate>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        autoFocus
                    />
                    {/*<TextField*/}
                    {/*    margin="dense"*/}
                    {/*    label="Password"*/}
                    {/*    type="password"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}
                    <FormControl
                        fullWidth
                        margin="dense">
                        <InputLabel>Password</InputLabel>
                        <Input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={(e) => handleMouseDownPassword(e)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
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
            <Link onClick={handleClose} to={paths.signup} className="link">Don't have an account?  Sign up</Link>
        </Dialog>

    );
}


