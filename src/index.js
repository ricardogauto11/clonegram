import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyD5nHdPYNtufMMUaSVHSbOoTeRPoM93Th0",
    authDomain: "clom-251bc.firebaseapp.com",
    databaseURL: "https://clom-251bc.firebaseio.com",
    projectId: "clom-251bc",
    storageBucket: "clom-251bc.appspot.com",
    messagingSenderId: "815361454231"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
