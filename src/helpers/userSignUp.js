import firebase from 'firebase/app';
import 'firebase/auth';
import checkUsernameExists from './validation/checkUsernameExists'

export default (username, email, password, ) =>
    checkUsernameExists(username).then(() => firebase.auth().createUserWithEmailAndPassword(email, password))
