import Product from "../db/db_models/products.js";
import Category from "../db/db_models/categories.js";
import "./config/index.js";

(async function () {
    const Categories = [
        { name: "bombacha" },
        { name: "corpiños" },
        { name: "conjuntos" }
    ]
    const newCategories = await Category.insertMany(Categories)

    const Products = [
        { name: "corpiño anita", imgURL: ["https://i.imgur.com/PFsJ54s.jpg"], price: 9.90, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
        { name: "conjunto carla", imgURL: ["https://i.imgur.com/r0T1OhP.jpg"], price: 10.00, available: false, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[2]._id] },
        { name: "colaless pepita", imgURL: ["https://i.imgur.com/NG1AMMh.jpg"], price: 10.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "top celia", imgURL: ["https://i.imgur.com/8oqDRwi.jpg"], price: 10.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
        { name: "corpiño anita", imgURL: ["https://i.imgur.com/PFsJ54s.jpg"], price: 9.90, available: false, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
        { name: "conjunto carla", imgURL: ["https://i.imgur.com/r0T1OhP.jpg"], price: 10.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[2]._id] },
        { name: "colaless pepita", imgURL: ["https://i.imgur.com/NG1AMMh.jpg"], price: 15.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "top celia", imgURL: ["https://i.imgur.com/8oqDRwi.jpg"], price: 15.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
        { name: "corpiño anita", imgURL: ["https://i.imgur.com/PFsJ54s.jpg"], price: 10.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },
        { name: "conjunto carla", imgURL: ["https://i.imgur.com/r0T1OhP.jpg"], price: 9.90, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[2]._id] },
        { name: "colaless pepita", imgURL: ["https://i.imgur.com/NG1AMMh.jpg"], price: 15.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[0]._id] },
        { name: "top celia", imgURL: ["https://i.imgur.com/8oqDRwi.jpg"], price: 15.00, available: true, description: "En rosa, negro, blanco, talles especiales.", categories: [newCategories[1]._id] },

    ]
    const products = await Product.insertMany(Products)
    const newProducts = await Product.find().populate({ path: "categories", populate: { path: "categories" } })
    console.log(newProducts)
    process.exit();
})()