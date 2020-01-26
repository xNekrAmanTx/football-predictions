import React from 'react';
import { useForm } from 'react-hook-form'
import '../../../styles/signup.css';

export default function SignUp(){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => { console.log(data); e.defaultPrevented = false; };
    const validators = {
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        firstOrLastName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    };
    return  (
        <div className="row align-items-center justify-content-center min-vh-100">
            <div className="sign-up-form">
                <h3>REGISTRATION</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <span className="required">Username</span>
                        <input type="text" ref={register({ required: true })} name="username" className="form-control mt-1" placeholder="Your Username"/>
                        {errors.username && <span className="error">Username is required</span>}
                    </div>
                    <div className="form-group">
                        <span>First Name (optional)</span>
                        <input type="text" ref={register({pattern: validators.firstOrLastName})} name="firstname" className="form-control mt-1" placeholder="Your First Name"/>
                        {errors.firstname && <span className="error">First name must contain only letters and special characters</span> }
                    </div>
                    <div className="form-group">
                        <span>Last Name (optional)</span>
                        <input type="text" ref={register({pattern: validators.firstOrLastName})} name="lastname" className="form-control mt-1" placeholder="Your Last Name"/>
                        {errors.lastname && <span className="error">Last name must contain only letters and special characters</span> }
                    </div>
                    <div className="form-group">
                        <span className="required">Email</span>
                        <input type="text" ref={register({ required: true, pattern: validators.email })} name="email" className="form-control mt-1" placeholder="Your Email"/>
                        {errors.email && errors.email.type === 'required' && <span className="error">Email is required</span>}
                        {errors.email && errors.email.type === 'pattern' && <span className="error">Email is not valid</span>}
                    </div>
                    <div className="form-group">
                        <span className="required">Password</span>
                        <input type="password" ref={register({ required: true, minLength: 8 })} name="password" className="form-control mt-1" placeholder="Your Password"/>
                        {errors.password && errors.password.type === 'required' && <span className="error">Password is required</span>}
                        {errors.password && errors.password.type === 'minLength' && <span className="error">Password must have minimum 8 characters</span>}
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" className="btnSubmit" value="Sign Up" />
                    </div>
                </form>
             </div>
        </div>
    )
}
