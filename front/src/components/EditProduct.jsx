import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { postProduct } from "../redux/actions/products";
import axios from 'axios'


const EditProduct = () => {
  const productos = useSelector((state) => state.products);
console.log("como me llega un solo producto", productos)
   const [name,setName] = useState("");
   const [imgURL,setImgURL] = useState("");
   const [price,setPrice] = useState("");
   const [description,setDescription] = useState("");
   const [available,setAvailable] = useState("");
   const [categories,setCategories] = useState("");
     
  const history = useHistory();
 // const [error, setError] = useState("")
  const dispatch = useDispatch();




  async function handleSubmit(e) {

    e.preventDefault()
         
     
      const res = await axios.put('/api/products',{ 
        name,
        categories:[categories],
        price,
        imgURL:[imgURL],
        available,
        description

      })

      const data= await res.data
      console.log(data)

      history.push("/adminpanel")
    

  }

  useEffect(() => {
    dispatch(postProduct());
    return () => { };
  }, []);




  return (

    <div className="striped grey lighten-4">
      <h1>Agregar Producto</h1>
      <p>falta completar</p>
     
      <div classname="container">
        <div className="row">
          <form class="col s12" onSubmit={handleSubmit}>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                value={name}
                onChange={e=>setName(e.target.value)}
                  id="productname"
                  class="materialize-textarea"
                />
                <label for="productname" ></label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                value={imgURL}
                onChange={e=>setImgURL(e.target.value)}
                  id="imgURL"
                  class="materialize-textarea"
                ></textarea>
                <label for="imgURL" >Imagen URL</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  value={price}
                  onChange={e=>setPrice(e.target.value)}
                  id="productprice"
                  class="materialize-textarea"
                ></textarea>
                <label for="productprice" >Precio</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <textarea
                value={available}
                onChange={e=>setAvailable(e.target.value)}
                  id="available"
                  class="materialize-textarea"
                ></textarea>
                <label for="available" >
                  <input type="checkbox" class="filled-in" checked="checked" />
                  <span>Available</span>
                </label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                value={description}
                onChange={e=>setDescription(e.target.value)}
                  id="productdescription"
                  class="materialize-textarea"
                ></textarea>
                <label for="productdescription"  >Descripcion del Producto</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
              <textarea
                value={categories}
                onChange={e=>setCategories(e.target.value)}
                  id="productcategories"
                  class="materialize-textarea"
                ></textarea>
                <label for="categories" >Categorias</label>
              </div>
            </div>  
            <button className="waves-effect waves-light btn #880e4f pink darken-4" type="submit"> 
          Agregar Producto
          </button>  
          <a className="waves-effect waves-light btn #880e4f pink darken-4">
          <i class="material-icons left">delete</i>
        </a>        
          </form>
        </div>
        <br />             
        
        <br />
      </div>
    </div>
  );
};

export default EditProduct;
