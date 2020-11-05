
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"

import withFirebaseAuth from './firebase/login'

//Firebase
import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzk2OZavEhBqRzNDetZrlBrAm5hIjAMTY",
  authDomain: "ecommerce-2020-b068c.firebaseapp.com",
  databaseURL: "https://ecommerce-2020-b068c.firebaseio.com",
  projectId: "ecommerce-2020-b068c",
  storageBucket: "ecommerce-2020-b068c.appspot.com",
  messagingSenderId: "828383040394",
  appId: "1:828383040394:web:1f3f27ef8edc37b6da6e73",
  measurementId: "G-FXWFEH2VDR"
};

function App({ user, signOut, signInWithGoogle, signInWithFacebook }) {
  console.log(user)
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <NavBar />
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <IfFirebaseAuthed>
                <p>{user ? user.displayName : null}</p>
                <button onClick={signOut}>logout</button>
              </IfFirebaseAuthed>
              <button onClick={signInWithGoogle}>login google</button>
              <button onClick={signInWithFacebook}>login facebook</button>
              <Route path="/" component={ProductosContainer} />

            </header>
          </div>
        </BrowserRouter>
      </Provider>
    </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(App);
