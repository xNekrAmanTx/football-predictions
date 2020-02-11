import firebase from 'firebase/app';
import 'firebase/auth'

export default (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
});