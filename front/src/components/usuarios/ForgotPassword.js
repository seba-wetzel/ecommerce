import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <div className="col s12 m6">
        <div className="#eeeeee grey lighten-3">
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <span>error</span>}
          {message && <span variant="success">{message}</span>}
          <form  className="col s12 m4 l6" onSubmit={handleSubmit}>
            <div className="form-group" id="email">
              <h6 htmlFor="">Email</h6>
              <input className="form-Control" type="email" ref={emailRef} />
            </div>
            <button  disabled={loading} type="submit" className="waves-effect waves-light btn-small"><i className="material-icons right">cloud</i>Reset Password</button>             
            
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
            <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}
