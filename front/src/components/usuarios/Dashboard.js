import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="container">
      <div className="col s12 m6">
        <div className="#eeeeee grey lighten-3">
          <h2 className="text-center mb-4">Profile</h2>
          {error && <span>error</span>}
          <strong>Email:</strong> {currentUser.email}
          <div>       
          <button onClick={handleLogout} type="submit" className="waves-effect waves-light btn-small"><i className="material-icons right">cloud</i>Log Out</button>
          </div>          
        </div>
      </div>      
    </div>
  )
}
