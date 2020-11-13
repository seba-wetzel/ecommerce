import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/actions/products";
import { addToCart } from "../redux/actions/cart";
import { fetchComments } from "../redux/actions/comments";
import { useParams, Link } from "react-router-dom";
import Review from "./Review";

const SoloProductoComponent = () => {
  const producto = useSelector((state) => state.products.selectProduct);
  const comentarios = useSelector((state) => state.comments);
  const comentario = useSelector((state) => state.comments.comment);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, []);

  useEffect(async () => {
    dispatch(fetchComments(producto._id));
  }, [comentario]);

  const add = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card horizontal">
            <div className="card-image">
              {producto.imgURL ? <img src={producto.imgURL[0]} alt="" /> : null}
            </div>
            <div className="card-stacked">
              <h1 className="header">{producto.name}</h1>
              <div className="card-content">
                <p>{producto.description}</p>
                <p>
                  <h3>${producto.price}</h3>
                </p>
                {producto.available === true ? (
                  <p className="btn green waves-effect waves-purple">Stock</p>
                ) : (
                  <p className="btn grey waves-effect waves-purple">
                    Sin stock
                  </p>
                )}
                <div>
                  <Review />
                </div>
              </div>
              <div className="card-action #ba68c8 purple lighten-2">
                <Link to="/" className="btn #4a148c purple darken-4">
                  <i className="material-icons">arrow_back</i>Volver
                </Link>
                <a
                  onClick={() => add(producto)}
                  className="btn #4a148c purple darken-4"
                >
                  <i className="material-icons" onClick={() => add(producto)}>
                    shopping_basket{" "}
                  </i>
                  Agregar al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Comentarios!</span>
                  {comentarios.comments.length
                    ? comentarios.comments.map((comment, i) => {
                        return (
                          <p key={i}>
                            <h4>{comment.content}</h4>
                            <h6>
                              {comment.user.email}---{comment.date}
                            </h6>
                          </p>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloProductoComponent;

// <div id='idModal' className='modal'>
//     <div className='modal-content'>
//         <div className="card">
//             <div className="card-image large">
//                 <img src={producto.imgURL} height="50%" alt="" />
//                 <span className="card-title">Card Title</span>
//                 <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"> <i className="material-icons">shopping_basket</i></a>
//             </div>
//             <div className="card-content">
//                 <table className='striped centered'>
//                     <thead>
//                         <tr>
//                             <th>Producto</th>
//                             <th>Precio</th>
//                             <th>Stock</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{producto.name}</td>
//                             <td>{producto.price}</td>
//                             <td> <span className="new badge green" data-badge-caption="">{producto.stock}</span></td>
//                         </tr>

//                     </tbody>
//                 </table>
//             </div>
//             <div className="card-action">
//                 <p>{producto.description}</p>
//             </div>
//         </div>
//     </div>

//     <div className='modal-footer'>
//         <a href='' className='btn modal-close'>Volver</a>
//     </div>
// </div>
