import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart";

import Stars from "../components/stars"

const ProductosComponent = ({ producto, key }) => {
  const dispatch = useDispatch();
  const add = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="col s4 m3">
      <div className="card hoverable">
        <div className="card-image ">
          <img height="400" width="600" src={producto.imgURL} alt="" />

          <i className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4">
            <i onClick={() => add(producto)} className="material-icons">
              shopping_basket
            </i>
          </i>
        </div>

        <div className="card-content">
          <span className="card-title">{producto.name}</span>
          <p>{producto.description}</p>
          <p> $ {producto.price} </p>
          <Stars value={Math.floor(Math.random() * (6 - 1)) + 1} />
        </div>
        <div className="card-action center">
          <Link to={"/products/" + producto._id} className="btn red">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductosComponent;
