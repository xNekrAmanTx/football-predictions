import firebase from 'firebase/app';
import 'firebase/database';

export default function getUserPrediction(username, leagueId, roundId, fixId) {
    return new Promise(resolve =>
        firebase.database().ref(`/users/${username}/predictions/${leagueId}/${roundId}/${fixId}`).on('value', snapshot => {
            resolve(snapshot.val());
        }))
    }

