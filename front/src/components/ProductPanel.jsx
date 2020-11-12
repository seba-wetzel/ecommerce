import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  postProduct,
  removeProduct,
  updatedProduct,
} from "../redux/actions/products";


const ProductPanel = ({ producto, handleDelete }) => {
console.log(producto, "aqui el producto")

  return (
    <tr>
      <td>{producto.name}</td>
      <td>{producto.description}</td>
      <td>{producto.price}</td>
      {/* //CAMBIAR A STOCK */}
      <td>{producto.price}</td>
      <td>{producto.imgURL}</td>
      <td>{producto.available}</td>
      <td>
        <a class="waves-effect waves-light btn #880e4f pink darken-4">Editar</a>{" "}
        <button  className="waves-effect waves-light btn #880e4f pink darken-4"
        onClick={()=>handleDelete(producto._id)}>
          <i class="material-icons left" >delete</i>
        </button>
      </td>
    </tr>
  );
};

export default ProductPanel;
