import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { 
    Link,
    useLocation,
} from 'react-router-dom';
import { paths } from '../../../constants';
import Login from '../../containers/login'

export default () => {

    const [open, setOpen] = useState(false)
    const location = useLocation();

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div className="">
            <Button
                disabled={location.pathname === paths[2]}
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Log In
            </Button>
            <Login open={open} onClose={handleClose}/>
            <Link to={paths[2]}>
                <Button variant="contained" color="primary">
                    Sign up
                </Button>
            </Link>
        </div>
    )
}
