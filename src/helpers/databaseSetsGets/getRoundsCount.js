import firebase from 'firebase/app'
import 'firebase/database'
import getRoundsAvailableForLeague from '../getsFromApi/getRoundsAvailableForLeague'


export default leagueId =>
    new Promise(resolve => firebase.database().ref(`/roundsAvailableForLeague/${leagueId}`).on('value', function (snapshot) {
        snapshot.exists() ? resolve(snapshot.val()) : getRoundsAvailableForLeague(leagueId).then(roundsCount =>
            firebase.database().ref(`/roundsAvailableForLeague/${leagueId}`)
                .set(roundsCount)
                .then(resolve))
    }))