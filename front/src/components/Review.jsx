import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { postComment, fetchComments } from "../redux/actions/comments";
import axios from "axios";
import { Link } from "react-router-dom";

const Review = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comentario, setComentario] = useState("");

  const producto = useSelector((state) => state.products.selectProduct);
  const usuario = useSelector((state) => state.user);
  console.log("USUARIOOOOOOO", usuario);
  const comentarios = useSelector((state) => state.comments);
  const userRole = useSelector((state) => state.user.db.role);
  let userAut = false;
  if (userRole === "admin") {
    userAut = true;
  }
  if (userRole === "superAdmin") {
    userAut = true;
  }
  const dispatch = useDispatch();

  const addComentario = () => {
    let newComentario = {
      id: comentario.length,
      name: comentario,
      complete: false,
    };
    dispatch(postComment(producto._id, comentario));
    setComentario("");
  };

  useEffect(async () => {
    if (producto._id) {
      dispatch(fetchComments(producto._id));
    }
  }, [producto]);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              margin={8}
              size={50}
              color={ratingValue <= (hover || rating) ? "#ffd600" : "#64b5f6"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComentario();
        }}
        className="col s12"
      >
        {userRole ? (
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">mode_edit</i>
              <input
                placeholder="Tu comentario!"
                onChange={(e) => setComentario(e.target.value)}
                value={comentario}
                id="icon_prefix2"
                className="materialize-textarea"
              ></input>
              <a
                className="btn #4a148c purple darken-4"
                onClick={(e) => {
                  e.preventDefault();
                  addComentario();
                }}
              >
                Enviar
              </a>
            </div>
          </div>
        ) : (
          <Link to="/login">Logueate para dejar tu comentario</Link>
        )}
      </form>
    </div>
  );
};

export default Review;
