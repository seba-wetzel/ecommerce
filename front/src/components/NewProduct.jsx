import React from "react";

const NewProduct = () => {
  return (
    <div className="striped grey lighten-4">
      <h1>Agregar Producto</h1>
      <p>falta completar</p>
      <div>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="productname"
                class="materialize-textarea"
              ></textarea>
              <label for="productname">Nombre</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="productdescription"
                class="materialize-textarea"
              ></textarea>
              <label for="productdescription">Descripcion</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="productprice"
                class="materialize-textarea"
              ></textarea>
              <label for="productprice">Precio</label>
            </div>
          </div>
        </form>
      </div>
      <br />
      <a class="waves-effect waves-light btn #880e4f pink darken-4">
        Agregar Producto
      </a>{" "}
      <a class="waves-effect waves-light btn #880e4f pink darken-4">
        <i class="material-icons left">delete</i>
      </a>
      <br />
    </div>
  );
};

export default NewProduct;
