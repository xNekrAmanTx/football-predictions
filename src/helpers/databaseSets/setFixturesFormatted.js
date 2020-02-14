import firebase from 'firebase/app'
import 'firebase/database'
import getFixturesByLeagueId from '../getsFromApi/getFixturesByLeagueId'


export default leagueId =>
    firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}`).on('value', function (snapshot) {
        snapshot.exists() || getFixturesByLeagueId(leagueId).then(fixt => 
            firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}`).set(fixt))
    })