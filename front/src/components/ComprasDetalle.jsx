import React from "react";
import { useSelector } from "react-redux";

const ComprasDetalle = () => {
  const compras = useSelector((state) => state.user.db);

  console.log(compras, "luchito");

  return (
    <div class="row">
      <div class="col s12 m6">
        {compras
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
