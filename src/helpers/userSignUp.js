import firebase from 'firebase/app';
import 'firebase/auth';
import setUser from './validation/checkUsernameExists'

export default (username, email, password) =>
    setUser(username).then(() =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
    )
