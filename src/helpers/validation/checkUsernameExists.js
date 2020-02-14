import firebase from 'firebase/app';
import 'firebase/database';

export default (username) => new Promise((resolve, reject) => {
    firebase.database().ref('users/' + username).on('value', function(snapshot) {
        if (snapshot.exists()) reject(new Error('Username already exists'));
        else resolve();
    })
})
