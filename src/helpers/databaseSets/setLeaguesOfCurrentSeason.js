import firebase from 'firebase/app'
import 'firebase/database'
import getLeaguesOfCurrentSeason from '../getsFromApi/getLeaguesOfCurrentSeason'


export default () => firebase.database().ref(`/leaguesOfCurrentSeason`).on('value', function(snapshot) {
    snapshot.exists() || getLeaguesOfCurrentSeason().then(leagues => firebase.database().ref(`/leaguesOfCurrentSeason`).set(leagues))
})
