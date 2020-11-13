import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, resetUser } from "../redux/actions/user";
//Firebase

import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";

function LoginGoogle({ user, signOut, signInWithGoogle }) {
  return (
    <FirebaseAuthProvider firebase={firebase}>
      <div className="App">
        <div className="right hide-on-med-and-down">
          <IfFirebaseAuthed>
            <ul>
              <li className="right hide-on-med-and-down">
                {user ? user.displayName : null}
              </li>
              <li className="right hide-on-med-and-down">
                <i className="material-icons" onClick={signOut}>
                  logout
                </i>
              </li>
            </ul>
          </IfFirebaseAuthed>
          <li>
            <i onClick={signInWithGoogle} className="material-icons">
              person_outline
            </i>
          </li>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
}

export default LoginGoogle;
