import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const prod = useSelector((state) => state.products.products);
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [categories, setCategories] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.put(`/api/products/${id}`, {
      name,
      categories: [categories],
      price,
      imgURL: [imgURL],
      available,
      description,
    });

    const data = await res.data;
    console.log(data);
    dispatch(fetchProducts());
    history.push("/adminpanel");
  }



  useEffect(() => {
    console.log("remontar", prod);
    return () => { };
  }, [prod]);

  return (
    <div className="striped grey lighten-4">
      <h1>Editar Producto</h1>
      <p>completar todos los campos</p>

      <div classname="container">
        <div className="row">
          <form class="col s12" onSubmit={handleSubmit}>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="productname"
                  class="materialize-textarea"
                />
                <label for="productname">Nombre</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={imgURL}
                  onChange={(e) => setImgURL(e.target.value)}
                  id="imgURL"
                  class="materialize-textarea"
                ></textarea>
                <label for="imgURL">Imagen URL</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="productprice"
                  class="materialize-textarea"
                ></textarea>
                <label for="productprice">Precio</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={available}
                  onChange={(e) => setAvailable(e.target.value)}
                  id="available"
                  class="materialize-textarea"
                ></textarea>
                <label for="available">
                  <input type="checkbox" class="filled-in" checked="checked" />
                  <span>Available</span>
                </label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="productdescription"
                  class="materialize-textarea"
                ></textarea>
                <label for="productdescription">Descripcion del Producto</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  id="productcategories"
                  class="materialize-textarea"
                ></textarea>
                <label for="categories">Categorias</label>
              </div>
            </div>
            <button
              className="waves-effect waves-light btn #880e4f pink darken-4"
              type="submit"
            >
              Editar Producto
            </button>
          </form>
        </div>
        <br />

        <br />
      </div>
    </div>
  );
};

export default EditProduct;
