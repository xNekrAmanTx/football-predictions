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
import firebase from 'firebase/app';
import 'firebase/auth';
import setFixturesFormatted from './helpers/databaseSets/setFixturesFormatted';
import Loading from "./view/components/Loading";
import getCurrentLeagues from './helpers/databaseSetsGets/getCurrentLeagues';
import getUsers from './helpers/databaseGets/getUsers';
import { calculateRoundPoints } from './helpers/calculatePoints';


function App() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [users, setUsers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => { setUser(user) });
      getCurrentLeagues()
        .then(leagues => (setLeagues(Object.values(leagues)), leagues))
        .then(leagues => Object.keys(leagues).map(ligueId => setFixturesFormatted(ligueId))).then(resolve);
    }).then(() => { setIsLoading(false); console.log(leagues) })
  }, [user]);

  useEffect(() => {
    leagues.length && getUsers().then(users => (setUsers(users), users))
      .then(users => Object.entries(users).filter(([username, user]) => user.predictions).forEach(([predictorName, predictor]) => {
        Object.entries(predictor.predictions).forEach(([leagueId, league]) => Object.entries(league).forEach(([roundId, round]) => {
          Object.entries(round).forEach(([fixtureId, fixture]) => {
            firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/${roundId}/${fixtureId}`).on('value', snap => {
              snap.exists() && snap.val().statusShort === 'FT' &&
                firebase.database().ref(`/users/${predictorName}/predictions/${leagueId}/${roundId}/${fixtureId}/fixturePoints`)
                .set(calculateRoundPoints(snap.val().score.fulltime, fixture.homeGoals + '-' + fixture.awayGoals, fixture.x2)).then(points => console.log(points, 'points'))
            })
          })
        })
        )
      }))

  }, [leagues])

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    !isLoading ?
      <div className='App'>
        <Header className='header' open={open} handleOpen={handleOpen} handleClose={handleClose} user={user} setIsLoading={setIsLoading} />
        <main className="main">
          <Switch>
            <CustomRoute className="home-route" exact path={[paths.home, paths.main]} render={() => <Home leagues={leagues} />} />
            <CustomRoute path={paths.main + '/:id'} render={() => <MainPage user={user} leagues={leagues} />} />
            <CustomRoute path={paths.signup}><SignUp handleOpen={handleOpen} setUser={setUser} setIsLoading={setIsLoading} /></CustomRoute>
            <CustomRoute path={paths.rules} component={Rules} />
            <CustomRoute render={() => <NotFound subLink='' />} />
          </Switch>
        </main>
        <Footer className="footer" />
      </div>
      :
      <Loading />

  );
}


export default App;
