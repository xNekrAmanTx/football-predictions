import React from 'react';
import './index.css';
import HeaderLogo from '../../components/headerLogo';
import SignUp from '../../pages/signup';

export default function Header() {
    return (
        <header>
            <HeaderLogo />
            <div className='header-but-cont'>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>

        </header>
    )
}

// <img src='./'/>

// '../../images/headerLogo'