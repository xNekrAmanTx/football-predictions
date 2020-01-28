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

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    const handleSubmit = e => e.preventDefault();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
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
                                className={classes.tf}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                size = "small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                size = "small"
                            />
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
                            />
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
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
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
            </div>
        </Container>
    );
}
