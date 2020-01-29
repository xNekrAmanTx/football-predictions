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
import { Avatar,
    Button,
    TextField,
    FormHelperText,
    Link,
    Grid,
    Typography,
    makeStyles,
    Container,
    createMuiTheme,
    MuiThemeProvider } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(1),
        padding : theme.spacing(1),
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

export default function SignUp() {
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

    let [username, setUsername] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let [isUsernameValid, setIsUsernameValid] = useState(true);
    let [isFirstNameValid, setIsFirstNameValid] = useState(true);
    let [isLastNameValid, setIsLastNameValid] = useState(true);
    let [isEmailValid, setIsEmailValid] = useState(true);
    let [isPasswordValid, setIsPasswordValid] = useState(true);

    let [isFirstSubmission, setIsFirstSubmission] = useState(true);

    const disabledSignUpButton = !(username && email && password);

    const validators = {
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        firstOrLastName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    };

    function setIsValuesValid(target) {
        switch(target.name) {
            case 'firstName': setIsFirstNameValid(validators.firstOrLastName.test(target.value)); break;
            case 'lastName': setIsLastNameValid(validators.firstOrLastName.test(target.value)); break;
            case 'email': setIsEmailValid(validators.email.test(target.value)); break;
            case 'password': setIsPasswordValid(target.value.length > 7); break;
            default: break;
        }
    }

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
        if(!isFirstSubmission) {
            setIsValuesValid(e.target);
            console.log(e.target.name);
        }
    };

    const handleSubmit = e => {
        for (let el of e.target.elements) {
            setIsValuesValid(el);
        }
        setIsFirstSubmission(false);
        e.preventDefault();
    };

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
                                size = "small"
                                autoFocus
                                onChange={(e) => handleChange(e, setUsername)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name (optional)"
                                size = "small"
                                error={!isFirstNameValid}
                                onChange={(e) => handleChange(e, setFirstName)}
                            />
                            {!isFirstNameValid && <FormHelperText error>First name must contain only letters and special characters</FormHelperText>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name (optional)"
                                name="lastName"
                                autoComplete="lname"
                                size = "small"
                                error={!isLastNameValid}
                                onChange={(e) => handleChange(e, setLastName)}
                            />
                            {!isLastNameValid && <FormHelperText error>Last name must contain only letters and special characters</FormHelperText>}
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
                                size = "small"
                                error={!isEmailValid}
                                onChange={(e) => handleChange(e, setEmail)}
                            />
                            {!isEmailValid && <FormHelperText error>Email is not valid</FormHelperText>}
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
                                size = "small"
                                error={!isPasswordValid}
                                onChange={(e) => handleChange(e, setPassword)}
                            />
                            {!isPasswordValid && <FormHelperText error>Password must have minimum 8 characters</FormHelperText>}
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
                            <Link href="/login" variant="body2">
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
