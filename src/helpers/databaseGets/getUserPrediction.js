import firebase from 'firebase/app';
import 'firebase/database';

export default function getUserPrediction(setter, username, leagueId, roundId, fixId) {
    return firebase.database().ref(`/users/${username}/predictions/${leagueId}/${roundId}/${fixId}`).on('value', setter)
}

