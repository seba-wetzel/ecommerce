import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()  
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <div className="col s6 m4 l6">
        <div className="#eeeeee grey lighten-3">
        <div className="content-center">
          <h2>Sign Up</h2>
          {error && <span>Error al iniciar sesion</span>}
          <form className="col s12 m4 l6" onSubmit={handleSubmit}>
          <div className="input-field"> 
            <i className="material-icons prefix">person</i>
            <input class="form-Control" type="email" ref={emailRef} placeholder="Enter email" required />
          </div>
          <div className="input-field"> 
            <div class="form-group" id="password">
              <i className="material-icons prefix">lock</i>
              <input class="form-Control" type="password" ref={passwordRef} placeholder="Enter Password" required />
            </div>
          </div>
          <div className="input-field">
            <div class="form-group" id="password-confirm">
              <i className="material-icons prefix">lock</i>
              <input class="form-Control" type="password" ref={passwordConfirmRef} placeholder="Enter Password" required />
            </div>
          </div>
          <button  disabled={loading} type="submit" className="waves-effect waves-light btn-small"><i className="material-icons right">cloud</i>Sign Up</button>
          </form>
          <div>
            Already have an account? <Link to="/login">Log In</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
