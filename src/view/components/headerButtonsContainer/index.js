import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { 
    Link,
    useLocation,
} from 'react-router-dom';
import { paths } from '../../constants';
import LoginDialogForm from '../../containers/loginDialog';

const linkStyle = {
    textDecoration: 'none'
};

export default (props) => {
    
    const location = useLocation();

    return (
        <div className="">
            <Button
                disabled={location.pathname === paths[2]}
                variant="contained"
                color="primary"
                onClick={props.handleOpen}
            >
                Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths[2]} style={linkStyle}>
                <Button variant="contained" color="primary">
                    Sign up
                </Button>
            </Link>
        </div>
    )
}
