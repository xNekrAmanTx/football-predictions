import firebase from 'firebase/app'
import 'firebase/database'

export default () => new Promise (resolve => 
    firebase.database().ref(`/leaguesOfCurrentSeason`).on('value', snapshot => {
    resolve(snapshot.val());
}));
