import Product from '../db/db_models/products.js'
import "./config/index.js"

const product = [{ nombre: "taza" },
{ nombre: "plato" },
{ nombre: "vaso" }
]

Product.insertMany(product).then(e => {
    console.log("algo")
    process.exit();
})