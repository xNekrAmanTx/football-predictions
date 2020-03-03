import firebase from 'firebase/app';
import 'firebase/database';

export default function setUserPrediction(username, leagueId, roundId, fixtureId, x2, homeGoals, awayGoals, fixturePoints) {
    firebase.database().ref(`/users/${username}/predictions/${leagueId}/${roundId}/${fixtureId}`)
        .set({ homeGoals, awayGoals, x2, fixturePoints })
}