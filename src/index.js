import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyBFJEhQXvZEAu84UhZ9sQcXViSDhCH_y8A",
    authDomain: "predictor-465a7.firebaseapp.com",
    databaseURL: "https://predictor-465a7.firebaseio.com",
    projectId: "predictor-465a7",
    storageBucket: "predictor-465a7.appspot.com",
    messagingSenderId: "705740685865",
    appId: "1:705740685865:web:cdbc4a56a40f84a0f31238",
    measurementId: "G-3PVMCF8DT8"
  };

firebase.initializeApp(firebaseConfig);

const appWithRouter = <Router> <App /> </Router>;

ReactDOM.render(appWithRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
