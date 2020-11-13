import React from "react";
import {Link} from 'react-router-dom';

const UserPanel = ({ user, handleDeleteUser }) => {
  return (
    <tr>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        {user.purchases.map((purchase) => (
          <p>{purchase.amount}</p>
        ))}
      </td>
      <td>{user.cart}</td>
      <td>{user.comments}</td>
      <td>{user.ratings}</td>
      <td>
      <Link
          class="waves-effect waves-light btn #880e4f pink darken-4"
          to={`/editusers/${user._id}`}
        >
          {" "}
          Editar{" "}
        </Link>
        <button  className="waves-effect waves-light btn #880e4f pink darken-4"
        onClick={()=>handleDeleteUser(user._id)}>
          <i class="material-icons left" >delete</i>
        </button>
      </td>
    </tr>
  );
};

export default UserPanel;
