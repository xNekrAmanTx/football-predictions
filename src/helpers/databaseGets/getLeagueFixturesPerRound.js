import firebase from 'firebase/app'
import 'firebase/database'

export default (leagueId) => new Promise (resolve => 
    firebase.database().ref(`/leaguesFixturesPerRound/${leagueId}`).on('value', snapshot => {
    resolve(snapshot.val());
}));