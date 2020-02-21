import firebase from 'firebase/app';
import 'firebase/database';

export default function setUserPrediction(username, leagueId, roundId, fixtureId, x2, homeGoals, awayGoals) {
    firebase.database().ref(`/users/${username}/predictions/${leagueId}/${roundId}`)
        .set({
            x2: x2, 
            [fixtureId]: { homeGoals: homeGoals, awayGoals: awayGoals },

        })
}