import express from 'express';
import { getAllProducts } from '../controllers/getAllProducts'

const Router = express.Router()
// import bodyParser, { json } from 'body-parser';

const app = express()
// app.use(bodyParser.json())

// Router.post('/name', async (req, res) => {
//     // console.log(body)
//     console.log(req.body)
//     // const response = await nameModel.create(name)
//     res.send('username created')
// })

Router.get('/get_all_products', getAllProducts)

module.exports = Router