import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDB } from "../redux/actions/user"

const ComprasDetalle = () => {
  const usuarios = useSelector((state) => state.user.user);
  const compras = useSelector((state) => state.user.db);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${usuarios._lat}`,
      },
    }).then(response => {
      dispatch(fetchUserDB());
    })
    return () => {

    }
  }, [])


  return (
    <div class="row">
      <div class="col s12 m6">
        {compras.purchases
          ? compras.purchases.map((compra) => {

            return (
              <div class="card blue-grey darken-1">
                <div class="card-content black-text #e0f2f1 teal lighten-5">
                  <span class="card-title ">
                    <h5>Detalle de la Compra</h5>
                  </span>
                  <hr></hr>
                  <h6>
                    I.D: {compra._id}
                    <span className="blue-text text-darken-2"></span>
                  </h6>
                  <h6>
                    Tu Pago{" "}
                    <span className="blue-text text-darken-2">
                      $ {compra.amount}
                    </span>
                  </h6>
                  <h6>
                    Fecha:
                      <span className="blue-text text-darken-2">
                      {compra.date}
                    </span>

                  </h6>
                  {compra.products.map((product) => {


                    return (

                      <Link to="/products/product.product._id"><h5>{product.product.name}</h5></Link>
                    )
                  })}

                </div>
              </div>

            );
          })
          : null}
      </div>
    </div>
  );
};

export default ComprasDetalle;
