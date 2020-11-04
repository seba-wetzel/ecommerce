import React from 'react';


//Firebase
import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed
} from "@react-firebase/auth";


import withFirebaseAuth from '../firebase/login'


function Login({ user, signOut, signInWithGoogle }) {
  console.log(user)
  return (

    <FirebaseAuthProvider firebase={firebase} >
         <div className="App">
         <div className="right hide-on-med-and-down"> 
              <IfFirebaseAuthed className="right hide-on-med-and-down">
                <p>{user ? user.displayName : null}</p>
                <i className="material-icons" onClick={signOut}>logout</i>
              </IfFirebaseAuthed>
              <i  onClick={signInWithGoogle}
              className="material-icons">person_outline</i>
            
          </div>
          </div>
        </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(Login);