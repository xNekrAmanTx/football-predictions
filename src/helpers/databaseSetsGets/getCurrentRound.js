import firebase from 'firebase/app'
import 'firebase/database'
import getCurrentRoundByLeague from '../getsFromApi/getCurrentRoundByLeague'


export default leagueId =>
    new Promise(resolve => firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/currentRound`).on('value', function (snapshot) {
        snapshot.exists() ? resolve(snapshot.val()) : getCurrentRoundByLeague(leagueId).then(curRound =>
            firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/currentRound`)
                .set(curRound)
                .then(resolve))
        
    }))