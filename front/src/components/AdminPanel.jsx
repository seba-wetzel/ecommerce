import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  postProduct,
  removeProduct,
  updatedProduct,
} from "../redux/actions/products";

const AdminPanel = () => {
  return (
    <div className="col s4 m3">
      <div>
        <div className="card-image ">
          <img src={producto.imgURL} alt="" />
        </div>

        <div>
          <span className="card-title">{producto.name}</span>
          <p>{producto.description}</p>
        </div>

        <div>
          <span className="card-title">{producto.stock}</span>
          <p>{producto.description}</p>
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
