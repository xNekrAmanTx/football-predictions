import React, {useState} from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './view/components/customRoute';
import './App.css';
import Home from './view/pages/home';
// import LogIn from './view/containers/loginDialog';
import SignUp from './view/pages/signup/Signup';
import Rules from './view/pages/rules';
import MainPage from './view/pages/mainPage';
import Header from './view/containers/header';
import Footer from './view/containers/footer';
import NotFound from './view/pages/notfound';
import { paths } from './view/constants';

function App() {

  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false)
}

  return (
    <div className='App'>
      <Header open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <main>
        <Switch>

          <CustomRoute exact path={paths.home} component={Home} />
          <CustomRoute path={paths.main} component={MainPage} />
          <CustomRoute path={paths.signup}><SignUp handleOpen={handleOpen}/></CustomRoute>
          <CustomRoute path={paths.rules} component={Rules} />
          <CustomRoute component={NotFound} />

        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
