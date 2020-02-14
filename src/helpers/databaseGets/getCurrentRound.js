import firebase from 'firebase/app'
import 'firebase/database'

export default leagueId => new Promise (resolve => 
    firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/currentRound`).on('value', snapshot => {
    resolve(snapshot.val());
}));