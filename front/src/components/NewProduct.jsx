import React from "react";

const NewProduct = () => {
  return (
    <div className="striped grey lighten-4">
      <h1>Agregar Producto</h1>
      <p>falta completar</p>
      <div classname="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="productname"
                  className="materialize-textarea"
                ></textarea>
                <label for="productname">Nombre</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="productdescription"
                  className="materialize-textarea"
                ></textarea>
                <label for="productdescription">Descripcion</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="productprice"
                  className="materialize-textarea"
                ></textarea>
                <label for="productprice">Precio</label>
              </div>
            </div>
          </form>
        </div>
        <br />
        <a className="waves-effect waves-light btn #880e4f pink darken-4">
          Agregar Producto
        </a>{" "}
        <a className="waves-effect waves-light btn #880e4f pink darken-4">
          <i className="material-icons left">delete</i>
        </a>
        <br />
      </div>
    </div>
  );
};

export default NewProduct;
