import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserPanel = ({ user }) => {
  return (
    <tr>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.purchases.map(purchase => <p>{purchase.amount}</p>)}</td>
      <td>{user.cart}</td>
      <td>{user.comments}</td>
      <td>{user.ratings}</td>
    </tr>
  );
};

export default UserPanel;
