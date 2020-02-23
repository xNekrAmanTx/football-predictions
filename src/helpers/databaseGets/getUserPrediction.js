import firebase from 'firebase/app';
import 'firebase/database';

export default (username, leagueId, roundId, fixId) => new Promise(resolve =>
    firebase.database().ref(`/users/${username}/predictions/${leagueId}/${roundId}/${fixId}`).on('value', snapshot => {
        resolve(snapshot.val());
    }));