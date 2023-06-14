import express from "express";
import { getAllProducts, addProduct } from "./getProductsController";
const Router = express.Router();


Router.get('/get_all_products', getAllProducts)
Router.post('/add_product', addProduct)

module.exports = Router