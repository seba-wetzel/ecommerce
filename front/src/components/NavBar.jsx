import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidenav from "./Sidenav";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProduct,
  fetchProducts,
  searchProduct,
} from "../redux/actions/products";

const useInput = (name) => {
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);
  return { value, onChange, name };
};

const NavBar = () => {
  const [texto, setTexto] = useState("");

  const input = useInput("search");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userRole = useSelector((state) =>
    state.user.db ? state.user.db.role : null
  );

  let userAut = false;
  if (userRole === "admin") {
    userAut = true;
  }
  if (userRole === "superAdmin") {
    userAut = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (input.value === "") {
    //   dispatch(fetchProducts());
    // } else {
    dispatch(searchProduct(texto));
    setTexto("");
    // }
  };
  return (
    //NABVAR //
    <div className="App">
      <nav>
        <div className="nav-wrapper #880e4f pink darken-4">
          <Link to="/shopping" className="brand-logo center">
            Lenceria
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li className="input-field">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setTexto(e.target.value)}
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                  placeholder="Busqueda"
                />
              </form>
            </li>
          </ul>
          <ul className="lefth hide-on-med-and-down">
            <li>
              {user.email ? (
                <Link to="/login">
                  <i>{user.displayName ? user.displayName : user.email}</i>
                </Link>
              ) : (
                <Link to="/login">
                  <i className="material-icons prefix">person_outline</i>
                </Link>
              )}
            </li>
            <li>
              {userAut ? (
                <Link to="/adminpanel">
                  <i>Admin</i>
                </Link>
              ) : null}
            </li>

            <li>
              <Link to="/products" onClick={() => dispatch(searchProduct(""))}>
                Productos
              </Link>
            </li>
            <li>
              <Sidenav />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
