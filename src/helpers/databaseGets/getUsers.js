import firebase from 'firebase/app';
import 'firebase/database';

export default function getUsers() {
    return new Promise(resolve =>
        firebase.database().ref(`/users`).on('value', snapshot => {
            resolve(snapshot.val());
        }));
}