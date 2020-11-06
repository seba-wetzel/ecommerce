import Product from '../db/db_models/products.js'
import Category from '../db/db_models/categories.js'
import "./config/index.js"

(async function () {
    const Categories = [
        { name: "bombacha" },
        { name: "corpiños" },
        { name: "conjuntos" }
    ]
    const newCategories = await Category.insertMany(Categories)

    const Products = [
        { name: "vedetina", imgURL: ["/assets/1.jpg"], price: 9.90, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "tanga", imgURL: ["/assets/2.jpg"], price: 10.53, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "colaless", imgURL: ["/assets/3.jpg"], price: 15.33, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "top", imgURL: ["/assets/4.jpg"], price: 5.33, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
    ]
    const products = await Product.insertMany(Products)
    const newProducts = await Product.find().populate({ path: "categories", populate: { path: "categories" } })
    console.log(newProducts)
    process.exit();
})()

