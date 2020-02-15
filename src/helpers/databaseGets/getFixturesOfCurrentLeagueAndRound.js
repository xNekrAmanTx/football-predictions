import firebase from 'firebase/app'
import 'firebase/database'

export default (leagueId, roundId) => new Promise(resolve =>
    firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/${roundId}`).on('value', snapshot => {
        resolve(snapshot.val());
    }));