import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Avatar,
    Button,
    TextField,
    FormHelperText,
    Grid,
    Typography,
    makeStyles,
    Container,
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { paths } from '../../../constants';
import signUp from '../../../helpers/userSignUp'
import * as validation from '../../../helpers/validation/signupValidation';
import firebase from "firebase/app";
import 'firebase/auth';
import { SnackbarProvider, useSnackbar } from 'notistack';

const {validatePassword, validateUsername, validateEmail} = validation;

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp(props) {
    return (
        <SnackbarProvider maxSnack={2}>
            <SignUpSnack {...props}/>
        </SnackbarProvider>
    );
}

function SignUpSnack({ handleOpen, setUser }) {
    const history = useHistory();
    const classes = useStyles();

    const formLabelsTheme = createMuiTheme({
        overrides: {
            MuiFormLabel: {
                asterisk: {
                    color: '#db3131',
                }
            }
        }
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let [isTouchedUsername, setIsTouchedUsername] = useState(false);
    let [isTouchedEmail, setIsTouchedEmail] = useState(false);
    let [isTouchedPassword, setIsTouchedPassword] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    let userNameRef = useRef();


    useEffect(() => userNameRef.current && userNameRef.current.focus(), []);

    const disabledSignUpButton = !(validateUsername(username) && validateEmail(email) && validatePassword(password));

    const handleChange = (e, setValue) => {setValue(e.target.value)};

    const handleSubmit = e => { 
        e.preventDefault();
        signUp(username, email, password)
            .then(() =>
            firebase.database().ref('users/' + username).set({
                email: email,
                avatar : username[0].toUpperCase(),
            }))
            .then(() => history.push(paths.home))
            .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            enqueueSnackbar(errorMessage, {variant: "error"});
        });
        // console.log(firebase.auth().currentUser, 'SignupCurrentUser');
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <MuiThemeProvider theme={formLabelsTheme}>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={userNameRef}
                                    variant={"outlined"}
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    size="small"
                                    error={isTouchedUsername && !validateUsername(username)}
                                    onChange={(e) => handleChange(e, setUsername)}
                                    onBlur={(e) => {setIsTouchedUsername(true); console.log(e.target)}}
                                />
                                {isTouchedUsername && !validateUsername(username) && <FormHelperText error>Username must contain only latin letters and digits(2-20 chars)</FormHelperText>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    size="small"
                                    error={isTouchedEmail && !validateEmail(email)}
                                    onChange={(e) => handleChange(e, setEmail)}
                                    onBlur={() => {setIsTouchedEmail(true)}}
                                />
                                {isTouchedEmail && !validateEmail(email) && <FormHelperText error>Email is not valid</FormHelperText>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    size="small"
                                    error={isTouchedPassword && !validatePassword(password)}
                                    onChange={(e) => handleChange(e, setPassword)}
                                    onBlur={() => {setIsTouchedPassword(true)}}
                                />
                                {isTouchedPassword && !validatePassword(password) && <FormHelperText error>Password must contain at least 1 uppercase, 1 lowercase latin letters and 1 digit(8 or more chars)</FormHelperText>}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={disabledSignUpButton}
                        >
                            Sign Up
                    </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link onClick={handleOpen} to={paths.home} >
                                    Already have an account? Log in
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </MuiThemeProvider>
            </div>
        </Container>
    );
}
