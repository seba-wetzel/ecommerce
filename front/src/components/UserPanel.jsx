import React from "react";

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
        <a class="waves-effect waves-light btn #880e4f pink darken-4">Editar</a>{" "}
        <button
          className="waves-effect waves-light btn #880e4f pink darken-4"
          onClick={() => handleDeleteUser(user._id)}
        >
          <i class="material-icons left">delete</i>
        </button>
      </td>
    </tr>
  );
};

export default UserPanel;
