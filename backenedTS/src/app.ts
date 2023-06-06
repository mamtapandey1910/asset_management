import express from 'express';
import { connectToMongoDB } from './mongoConnect'
export const app = express()
const Router = express.Router()
import bodyParser from 'body-parser';
// import { profilePic } from './models/profilePic';
import { nameModel } from './models/name';

connectToMongoDB()

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', require('./routers/getAllProductsRouter'))
app.use('/profile', require('./routers/uploadProfilePicRouter'))