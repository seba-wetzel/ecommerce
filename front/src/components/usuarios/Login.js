import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import LoginGoogle from '../LoginGoogle';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
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
          <div class="span"><LoginGoogle/></div>
          <div class="span2"><Link to="/logingoogle"><i>Sign In with Google+</i><div class="clear"></div></Link></div>
        </div>
        </div>
      </div>
    </div>
  )
}
