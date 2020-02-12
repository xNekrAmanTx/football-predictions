import firebase from 'firebase/app'
import 'firebase/database'

export default (callback) => firebase.database().ref(`/leaguesOfCurrentSeason`).on('value', function(snapshot) {
    callback(snapshot.val());
});