import firebase from 'firebase/app'
import 'firebase/database'

export default (callback) => firebase.database().ref(`/leaguesOfCurrentSeason`).on('value', function(snapshot) {
    // console.log(snapshot.val());
    callback(snapshot.val());
});