import firebase from 'firebase/app'
import 'firebase/database'
import getCurrentRoundByLeague from '../getsFromApi/ getCurrentRoundByLeague'


export default leagueId =>
    firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/currentRound`).on('value', function (snapshot) {
        snapshot.exists() || getCurrentRoundByLeague(leagueId).then(curRound => 
            firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}currentRound/`).set(curRound))
    })