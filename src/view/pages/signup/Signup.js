import React, { useState } from 'react';
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
import { paths } from '../../constants';
import signUp from '../../helpers/userSignUp'
import * as validation from '../../helpers/validation/signupValidation';

import firebase from 'firebase/app';
import 'firebase/auth';

const {validatePassword, validateUsername, validateName, validateEmail} = validation;

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

export default function SignUp({ handleOpen }) {
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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isFirst, setIsFirst] = useState(true);
    
    const disabledSignUpButton = !(username && email && password);

    const handleChange = (e, setValue) => {setValue(e.target.value)}

    const handleSubmit = e => { 
        e.preventDefault(); 
        setIsFirst(false);
        signUp(email, password).then(user => {
            console.log(user, 'Signup');
        });
        // firebase.auth().currentUser.updateProfile({
        //     displayName: username,
        //   }).then(function() {
        //     alert('Update successful');
        //   }).catch(function(error) {
        //     alert('not updated');
        //   });
        history.push(paths.home)
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <MuiThemeProvider theme={formLabelsTheme}>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant={"outlined"}
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    size="small"
                                    error={!isFirst && !validateUsername(username)}
                                    autoFocus
                                    onChange={(e) => handleChange(e, setUsername)}
                                />
                                {!isFirst && !validateUsername(username) && <FormHelperText error>Username must contain only latin letters and digits(2-20 chars)</FormHelperText>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name (optional)"
                                    size="small"
                                    error={!isFirst && !validateName(firstName)}
                                    onChange={(e) => handleChange(e, setFirstName)}
                                />
                                {!isFirst && !validateName(firstName) && <FormHelperText error>First name must contain only latin letters(2-40)</FormHelperText>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name (optional)"
                                    name="lastName"
                                    autoComplete="lname"
                                    size="small"
                                    error={!isFirst && !validateName(lastName)}
                                    onChange={(e) => handleChange(e, setLastName)}
                                />
                                {!isFirst && !validateName(lastName) && <FormHelperText error>Last name must contain only latin letters(2-40)</FormHelperText>}
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
                                    error={!isFirst && !validateEmail(email)}
                                    onChange={(e) => handleChange(e, setEmail)}
                                />
                                {!isFirst && !validateEmail(email) && <FormHelperText error>Email is not valid</FormHelperText>}
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
                                    error={!isFirst && !validatePassword(password)}
                                    onChange={(e) => handleChange(e, setPassword)}
                                />
                                {!isFirst && !validatePassword(password) && <FormHelperText error>Password must contain at least 1 uppercase, 1 lowercase latin letters and 1 digit(8 or more chars)</FormHelperText>}
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
