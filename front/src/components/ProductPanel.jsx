import React from "react";
import {Link} from 'react-router-dom';



const ProductPanel = ({ producto, handleDelete }) => {

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
        <Link  className=" btn #880e4f pink darken-4" to="/editproduct">
          <i class="material-icons left" >Edit</i>
        </Link>
        <br/>              
        <button  className="waves-effect waves-light btn #880e4f pink darken-4"
        onClick={()=>handleDelete(producto._id)}>
          <i class="material-icons left" >delete</i>
        </button>
      </td>
    </tr>
  );
};

export default ProductPanel;
