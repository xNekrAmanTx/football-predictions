import firebase from 'firebase/app'
import 'firebase/database'
import getCurrentRoundByLeague from '../getsFromApi/getCurrentRoundByLeague'


export default leagueId =>
    new Promise(resolve => firebase.database().ref(`/currentRound/${leagueId}`).on('value', function (snapshot) {
        snapshot.exists() ? resolve(snapshot.val()) : getCurrentRoundByLeague(leagueId).then(curRound =>
            firebase.database().ref(`/currentRound/${leagueId}`)
                .set(curRound)
                .then(resolve))
        
    }))