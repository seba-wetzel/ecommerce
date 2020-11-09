import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const  {signup}  = useAuth()
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
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <span>error</span>}
          <form class="col s12" onSubmit={handleSubmit}>
            <div class="form-group" id="email">
            <label>Email</label>
            <input class="form-Control" type="email" ref={emailRef}  placeholder="Enter email" required />
            </div>
            <div class="form-group" id="password">
            <label>Password</label>
            <input class="form-Control" type="password" ref={passwordRef}  placeholder="Enter Password" required />
            </div>
            <div class="form-group" id="password-confirm">
            <label>Password Confirmation</label>
            <input class="form-Control" type="password" ref={passwordConfirmRef}  placeholder="Enter Password" required />
            </div>           
            <button disabled={loading} className="w-100" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}
