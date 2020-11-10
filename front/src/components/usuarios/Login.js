import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

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
       <div className="card">
         <div className="col s12 m6">
           <div className="card blue-grey darken-1">
             <div className="card-content white-text">
             <h2 className="text-center mb-4">Log In</h2>
             {error && <span>Error al iniciar sesion </span>}
             <form className="col s12" onSubmit={handleSubmit}>
               <div className="form-group" id="email">
                 <label htmlFor="email">Email</label>
                 <input className="form-Control" type="email" ref={emailRef} placeholder="Enter email" />
               </div>
               <div className="form-group" id="password">
                 <input className="form-Control" type="password" ref={passwordRef} placeholder="Enter Password" required />
               </div>
               <a  href="/" disabled={loading} type="submit" className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Log In</a>

             </form>   
             <div>
             <Link to="/forgot-password">Forgot Password?</Link>            
               Need an account? <Link to="/signup">Sign Up</Link>

             </div>

             </div>         
           </div>
         </div>

       </div>
     </div>


  )
}
