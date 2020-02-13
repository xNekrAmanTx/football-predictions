import firebase from 'firebase/app';
import 'firebase/auth'

export default (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);