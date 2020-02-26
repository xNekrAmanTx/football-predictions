import firebase from 'firebase/app';
import 'firebase/database';

export default (setter, leagueId, roundId) => firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/${roundId}`).on('value', setter);