import React, {useState, useEffect} from 'react';
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
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
    const [open, setOpen] = useState(false);
    const [leagueId/* , setLeagueId */] = useState(-1);
    const [user, setUser] = useState(firebase.auth().currentUser);

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

    firebase.auth().onAuthStateChanged(user => setUser(user));


    return (
        <div className='App'>
          <Header open={open} handleOpen={handleOpen} handleClose={handleClose} user={user}/>
          <main>
            <Switch>

              <CustomRoute exact path={paths.home} render={()=><Home leagueId={leagueId} getLeagueId={getLeagueId}/>} />
              <CustomRoute path={paths.main /*+ `/${leagueId}`*/} render={()=><MainPage leagueId={leagueId}/>} />
              <CustomRoute path={paths.signup}><SignUp handleOpen={handleOpen} setUser={setUser}/></CustomRoute>
              <CustomRoute path={paths.rules} component={Rules} />
              <CustomRoute component={NotFound} />

            </Switch>
          </main>
          <Footer />
        </div>
    );
    }

export default App;
