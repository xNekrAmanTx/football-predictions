import React from 'react';
import {
  Switch
} from 'react-router-dom';
import CustomRoute from './view/components/customRoute';
import './App.css';
import Home from './view/pages/home';
import LogIn from './view/pages/login';
import SignUp from './view/pages/signup/Signup';
import Rules from './view/pages/rules';
import NotFound from './view/pages/notfound';
import Header from './view/containers/header';
import Footer from './view/containers/footer';
import { paths } from './constants';


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>

          <CustomRoute exact path={paths[0]} component={Home} />
          <CustomRoute path={paths[1]} component={LogIn} />
          <CustomRoute path={paths[2]} component={SignUp} />
          <CustomRoute path={paths[3]} component={Rules} />
          <CustomRoute component={NotFound} />

        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
