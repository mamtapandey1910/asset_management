import express from 'express';
import cors from 'cors'
import { connectToMongoDB } from './mongoConnect'
export const app = express()
const Router = express.Router()
import bodyParser from 'body-parser';
// import { profilePic } from './models/profilePic';
import { nameModel } from './models/name';

connectToMongoDB()

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', require('./routers/getAllProductsRouter'))
app.use('/profile', require('./routers/uploadProfilePicRouter'))
app.use('/products', require('./products/getproductsRouter'))