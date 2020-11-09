import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <span>error</span>}
          <form className="col s12" onSubmit={handleSubmit}>
            <div class="form-group" id="email">
              <label className="form-Control" type="email" ref={emailRef}
              required
              defaultValue={currentUser.email}>Email</label>              
            </div>
            <div className="form-group" id="password">
            <label className="form-Control" type="password" ref={passwordRef}
              required
              defaultValue={currentUser.email}
              placeholder="Leave blank to keep the same">Password</label>              
            </div>
            <div className="form-group" id="password-confirm">
            <label className="form-Control" type="passeord" ref={passwordRef}
              required
              defaultValue={currentUser.email}
              placeholder="Leave blank to keep the same">Password Confirmation</label>              
            </div>            
            <button disabled={loading} className="w-100" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  )
}
