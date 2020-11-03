import express from 'express';

const products = express.Router()

products.get("/", (req, res) => {
    res.send(`${req.originalUrl}`)
})

export default products


/* .get = "/" = devuelve todos los productos
.get = "/:ID = tiene que devolver 1 producto"
.post = "/ = tiene que crear 1 producto"
El body del post tiene que devolver estos parametros :
nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imgURL: { type: Array, required: true },
  disponibilidad: { type: Boolean, default: true },
.put = "/:id = modificar producto"
.delete = "/:id" = sirve para borrar producto
  
  */