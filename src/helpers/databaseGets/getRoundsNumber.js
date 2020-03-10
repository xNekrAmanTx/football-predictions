import firebase from 'firebase/app'
import 'firebase/database'


export default leagueId =>
    new Promise(resolve => firebase.database().ref(`/roundsAvailableForLeague/${leagueId}`).on('value', function (snapshot) {
        resolve(snapshot.val())
    }))