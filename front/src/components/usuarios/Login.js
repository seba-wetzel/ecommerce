import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUser, resetUser,resetUserDb} from "../../redux/actions/user";

//Firebase

import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed
} from "@react-firebase/auth";

import withFirebaseAuth from '../../firebase/login'

 function Login({ user, signOut, signInWithGoogle, signInWithFacebook }) {
  const emailRef = useRef()  
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      //history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  useEffect(()=>{
    if(user){
      dispatch(setUser(user))
    history.push("/dashboard")
    }else{
      dispatch(resetUser())
      dispatch(resetUserDb())
    }
  },[user])
  console.log("esto de donde sale", user)
  return (
    <FirebaseAuthProvider firebase={firebase} >
      <IfFirebaseAuthed >
                  <ul>
            <li className="right hide-on-med-and-down">{user ? user.displayName : null}</li>
            <li className="right hide-on-med-and-down" ><i className="material-icons" onClick={signOut}>logout</i></li>           
                </ul>
                 </IfFirebaseAuthed>
    <div className="container">
      <div className="col s6 m4 l6">
        <div className="#eeeeee grey lighten-3">
          <div className="content-center">
            <h2 >Log In</h2>
            {error && <span>Error al iniciar sesion </span>}
            
            <form className="col s12 m4 l6" onSubmit={handleSubmit}>
             <h6 htmlFor="email"> Tu Correo Electronico </h6>
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input className="form-Control" type="email" ref={emailRef} placeholder="Enter email" />
              </div>
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input className="form-Control" type="password" ref={passwordRef} placeholder="Enter Password" required />
              </div>
              <button disabled={loading} type="submit" className="waves-effect waves-light btn-small"><i className="material-icons right">cloud</i>Log In</button>
              
            </form>
            <div>
              <Link to="/forgot-password">Forgot Password?</Link>
               Need an account? <Link to="/signup">Sign Up</Link>
            </div>            
          </div>
          <div class="account">          
            <div class="span2">
            
              <li > <img src="assets/google.png" alt="" onClick={signInWithGoogle}/>   
              Sign In with Google</li>
              <li > <img src="assets/facebook.png" alt="" onClick={signInWithFacebook}/>   
              Sign In with Facebook</li>

            </div>
        </div>
        </div>
      </div>
    </div>
    </FirebaseAuthProvider>
  )
}

export default withFirebaseAuth(Login);