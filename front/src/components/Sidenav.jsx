import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Sidenav = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.added);
  const units = useSelector((state) => state.cart.units);
  const total = useSelector((state) => state.cart.total);
  console.log("esto sidenav....", user);

  return (
    <div>
      <ul>
        <li className="active">
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">shopping_cart</i>
          </a>
        </li>
      </ul>

      <ul id="slide-out" className="sidenav">
        <div className="user-view" style={{ display: "flex" }}>
          (user? (<img className="circle" src={user.photoURL} alt="" />
          <div>
            <p className="black-text name">{user.displayName}</p>
            <p className="black-text email">{user.email}</p>)
          </div>
          : null)
        </div>

        <li>
          <a href="#!">
            <i className="material-icons">shopping_cart</i>
            <span className="new badge gray" data-badge-caption="">
              {units} Total: ${total}{" "}
            </span>
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>

        {cart && cart.length
          ? cart.map((item) => (
              <div>
                <CartItem
                  name={item.name}
                  imgURL={item.imgURL[0]}
                  total={item.units}
                  item={item}
                  key={item._id}
                />
              </div>
            ))
          : null}

        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link to="/shopping" className="btn blue waves-effect waves-purple">
            Check Out
          </Link>
        </li>
      </ul>
      <a
        href="/shopping"
        data-target="slide-out"
        className="sidenav-trigger show-on-large"
      >
        <i className="material-icons">shopping_cart</i>
      </a>
    </div>
  );
};

export default Sidenav;
