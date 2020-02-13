import React, { useState, useEffect } from 'react';
import { Switch, useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import CustomRoute from './view/components/customRoute';
import './App.css';
import Home from './view/pages/home';
import SignUp from './view/pages/signup/Signup';
import Rules from './view/pages/rules';
import MainPage from './view/pages/mainPage';
import Header from './view/containers/header';
import Footer from './view/containers/footer';
import NotFound from './view/pages/notfound';
import { paths } from './constants';
import getCurrentLeagues from './helpers/databaseGets/getCurrentLeagues';
import firebase from 'firebase/app';
import 'firebase/auth';
import setFixturesFormatted from './helpers/databaseSets/setFixturesFormatted';


function App() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [leagues, setLeagues] = useState({});


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user));
    getCurrentLeagues()
    .then(leagues => (setLeagues(leagues),leagues))
    .then(leagues => Object.keys(leagues).map(ligueId => {
      // console.log(ligueId);
      setFixturesFormatted(ligueId);
    } ) )
  }, [])

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className='App'>
      <Header open={open} handleOpen={handleOpen} handleClose={handleClose} user={user} />
      <main>
        <Switch>

          <CustomRoute exact path={[paths.home, paths.main]} render={() => <Home leagues={leagues} />} />

          <CustomRoute path={paths.main + '/:id'} render={() => <MainPage /* value={value} setValue={setValue} */ leagues={leagues} />} />)}

          <CustomRoute path={paths.signup}><SignUp handleOpen={handleOpen} setUser={setUser} /></CustomRoute>
          <CustomRoute path={paths.rules} component={Rules} />
          <CustomRoute render={() => <NotFound subLink='' />} />

        </Switch>
      </main>
      <Footer />
    </div>
  );
}


export default App;
