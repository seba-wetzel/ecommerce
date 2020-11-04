import React from 'react';


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


import withFirebaseAuth from '../firebase/login'



function Login({ user, signOut, signInWithGoogle }) {
  console.log(user)
  return (
    <FirebaseAuthProvider firebase={firebase} >
         <div className="App">
            <header className="App-header">
              <IfFirebaseAuthed>
                <p>{user ? user.displayName : null}</p>
                <button onClick={signOut}>logout</button>
              </IfFirebaseAuthed>
              <button onClick={signInWithGoogle}>login</button>
              

            </header>
          </div>
        </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(Login);