import React, { useState, useEffect } from 'react';
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
import { paths } from './constants';
import getCurrentLeagues from './helpers/databaseGets/getCurrentLeagues';
// import firebase from 'firebase/app';
// import 'firebase/auth';

function App() {

  const [open, setOpen] = useState(false);
  const [leagues, setLeagues] = useState({})
  const [leagueId/* , setLeagueId */] = useState(-1);

  useEffect (()=>{
    getCurrentLeagues(setLeagues)
  },[])

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false)
  }

  function getLeagueId(leagueName) {
    // axios kam fetch
    //fetch(firebaseBaseUrl + leagueName).then(res => setLeagueId(res))
    return Promise.resolve(1)
  }

  return (
    <div className='App'>
      <Header open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <main>
        <Switch>

          <CustomRoute exact path={paths.home} render={() => <Home leagues={leagues} leagueId={leagueId} getLeagueId={getLeagueId} />} />
          <CustomRoute path={paths.main} render={() => <MainPage leagues={leagues} leagueId={leagueId} />} />
          <CustomRoute path={paths.signup}><SignUp handleOpen={handleOpen} /></CustomRoute>
          <CustomRoute path={paths.rules} component={Rules} />
          <CustomRoute component={NotFound} />

        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
