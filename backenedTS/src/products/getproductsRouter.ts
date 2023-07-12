import express from "express";
import { getAllProducts, addProduct, updateProduct, deleteProduct, getProductDetails } from "./getProductsController";
const Router = express.Router();


Router.get('/products', getAllProducts)
Router.post('/products/new', addProduct)

// ------------> Admin
Router.route('/products/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)
// Router.delete('/products/:id', deleteProduct)

module.exports = Router