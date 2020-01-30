import React, {useState} from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './view/components/customRoute';
import './App.css';
import Home from './view/pages/home';
// import LogIn from './view/containers/loginDialog';
import SignUp from './view/pages/signup/Signup';
import Rules from './view/pages/rules';
import NotFound from './view/pages/notfound';
import Header from './view/containers/header';
import Footer from './view/containers/footer';
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

          <CustomRoute exact path={paths[0]} component={Home} />
          {/* <CustomRoute path={paths[1]} component={LogIn} /> */}
          <CustomRoute path={paths[2]}><SignUp handleOpen={handleOpen}/></CustomRoute>
          <CustomRoute path={paths[3]} component={Rules} />
          <CustomRoute component={NotFound} />

        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
