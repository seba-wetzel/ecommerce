import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//import { updatedProduct } from "../redux/actions/products";
import axios from "axios";

const EditUsers = () => {

  const { id } = useParams();


  const us = useSelector((state) => state.user.db);
  console.log("apedido de dani", us)

  const [role, setRole] = useState("");

  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.put(`/api/users/${id}`, {
      role,
    });

    const data = await res.data;
    console.log(data);
    history.push("/adminpanel");
  }



  useEffect(() => {
    console.log("remontar", us);
    return () => { };
  }, [us]);

  return (
    <div className="striped grey lighten-4">
      <h1>Editar Usuarios</h1>
      <p>completar todos los campos</p>
      <div classname="container">
        <div className="row">
          <form class="col s12" onSubmit={handleSubmit}>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  id="productname"
                  class="materialize-textarea"
                />
                <label for="productname">Role</label>
              </div>
            </div>
            <button
              className="waves-effect waves-light btn #880e4f pink darken-4"
              type="submit">
              Editar Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;
