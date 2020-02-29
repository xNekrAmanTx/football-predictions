import firebase from 'firebase/app';
import 'firebase/database';
import getLeagueTable from '../getsFromApi/getLeagueTable';


export default leagueId =>
    new Promise(resolve => firebase.database().ref(`/leagueTables/${leagueId}`).on('value', function (snapshot) {
        snapshot.exists() ? resolve(snapshot.val()) : getLeagueTable(leagueId).then(table =>
            firebase.database().ref(`/leagueTables/${leagueId}`)
                .set(table)
                .then(resolve))
    }))
