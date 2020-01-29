import React from 'react'
import logo from  '../../images/headerLogo.png';
import './index.css';
import { withRouter } from 'react-router-dom';
import {paths} from '../../constants'


const HeaderLogo = ({history}) => (
    <div onClick={()=>history.push(paths[0])} className='header-logo'>PREDICT<img src={logo} alt='headerlogo' /* title='predictOr' */ height="42" width="42"/>R</div>
)

export default withRouter(HeaderLogo)