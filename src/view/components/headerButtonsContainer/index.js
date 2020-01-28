import React from 'react';
import {Link} from 'react-router-dom';
import { paths } from '../../../constants';

export default () => (
    <div className="">
        <Link to={paths[1]}><button>Log In</button></Link>
        <Link to={paths[2]}><button >Sign Up</button></Link>
    </div>
)

