// import React from 'react';
// import { useForm } from 'react-hook-form';
//
//
// export default function SignUp(){
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = (data) => { console.log(data); };
//     const validators = {
//         email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//         firstOrLastName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
//     };
//     return  (
//         <div className="row align-items-center justify-content-center min-vh-100">
//             <div className="sign-up-form">
//                 <h3>REGISTRATION</h3>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="form-group">
//                         <span className="required">Username</span>
//                         <input type="text" ref={register({ required: true })} name="username" className="form-control mt-1" placeholder="Your Username"/>
//                         {errors.username && <span className="error">Username is required</span>}
//                     </div>
//                     <div className="form-group">
//                         <span>First Name (optional)</span>
//                         <input type="text" ref={register({pattern: validators.firstOrLastName})} name="firstname" className="form-control mt-1" placeholder="Your First Name"/>
//                         {errors.firstname && <span className="error">First name must contain only letters and special characters</span> }
//                     </div>
//                     <div className="form-group">
//                         <span>Last Name (optional)</span>
//                         <input type="text" ref={register({pattern: validators.firstOrLastName})} name="lastname" className="form-control mt-1" placeholder="Your Last Name"/>
//                         {errors.lastname && <span className="error">Last name must contain only letters and special characters</span> }
//                     </div>
//                     <div className="form-group">
//                         <span className="required">Email</span>
//                         <input type="text" ref={register({ required: true, pattern: validators.email })} name="email" className="form-control mt-1" placeholder="Your Email"/>
//                         {errors.email && errors.email.type === 'required' && <span className="error">Email is required</span>}
//                         {errors.email && errors.email.type === 'pattern' && <span className="error">Email is not valid</span>}
//                     </div>
//                     <div className="form-group">
//                         <span className="required">Password</span>
//                         <input type="password" ref={register({ required: true, minLength: 8 })} name="password" className="form-control mt-1" placeholder="Your Password"/>
//                         {errors.password && errors.password.type === 'required' && <span className="error">Password is required</span>}
//                         {errors.password && errors.password.type === 'minLength' && <span className="error">Password must have minimum 8 characters</span>}
//                     </div>
//                     <div className="form-group text-center">
//                         <input type="submit" className="btnSubmit" value="Sign Up" />
//                     </div>
//                 </form>
//              </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import * as validation from '../../helpers/validation/signupValidation'

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

    const handleSubmit = e => { setIsFirst(false); e.preventDefault() };

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
