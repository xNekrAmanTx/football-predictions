import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './view/pages/home';
import LogIn from './view/pages/login';
import SignUp from './view/pages/signup/Signup';
import NotFound from './view/pages/notfound';
import Header from './view/containers/header';

function App() {
  return (
    <div clasName='App'>
      <Header></Header>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
