import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Sidenav from './Sidenav';
import { useDispatch, useSelector } from 'react-redux';


import { fetchProduct, fetchProducts } from '../redux/actions/products'

const useInput = (name) => {
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);
  return { value, onChange, name };
}

const NavBar = () => {
  const dispatch = useDispatch()
  const input = useInput("search")

  const handleSubmit = e => {
    e.preventDefault()
    if (input.value === "") dispatch(fetchProducts())
    else dispatch(fetchProduct(input.value))
  }
  return (
    //NABVAR //
    <div className="App">
      <nav>
        <div className="nav-wrapper #880e4f pink darken-4">
          <li className="brand-logo center">Lenceria</li>
          <ul className="right hide-on-med-and-down">
            <li><i className="material-icons">search</i></li>
            <li className="input-field">
              <form onSubmit={handleSubmit}>
                <input {...input} type="text" id="autocomplete-input" class="autocomplete" placeholder="Busqueda" />
              </form>
            </li>
          </ul>
          <ul className="lefth hide-on-med-and-down">
            <li>
              <Link to="/login"><Login /></Link>
            </li>
            <li><Link to="/">Productos</Link></li>
            <li><Link to="/" ><Sidenav /></Link></li>
          </ul>
        </div>
      </nav>

    </div>
  )
}


export default NavBar;