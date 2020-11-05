
import React from "react";
import { BrowserRouter, Route , Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"
import Login from './components/Login'
import Carrito from "./components/Carrito";

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
<<<<<<< HEAD
          <div className="App">
            <header className="App-header">
              <IfFirebaseAuthed>
                <p>{user ? user.displayName : null}</p>
                <button onClick={signOut}>logout</button>
              </IfFirebaseAuthed>
              <Route path="/" component={ProductosContainer} />

            </header>
          </div>
=======
        <div >
             <Switch>

                  <Route exact path='/login' component={Login}></Route>
                  <Route exact path='/shopping' component={Carrito}></Route>
                  <Route exact path='/' component={ProductosContainer}></Route>

            </Switch>
        </div>
>>>>>>> fe28f9345c825d281f3835d18ae7369b0359eb81
        </BrowserRouter>
      </Provider>
    </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(App);
