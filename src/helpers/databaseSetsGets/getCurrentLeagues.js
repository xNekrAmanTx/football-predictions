import firebase from 'firebase/app';
import 'firebase/database';
import getLeaguesOfCurrentSeason from '../getsFromApi/getLeaguesOfCurrentSeason';


export default () =>
    new Promise(resolve => firebase.database().ref(`/leaguesOfCurrentSeason`).on('value', function (snapshot) {
        snapshot.exists() ? resolve(snapshot.val()) : getLeaguesOfCurrentSeason().then(leagues =>
            firebase.database().ref(`/leaguesOfCurrentSeason`)
                .set(leagues)
                .then(resolve))
    }))
