import express from 'express';
import { connectToMongoDB } from './mongoConnect'
export const app = express()
const Router = express.Router()
// import { profilePic } from './models/profilePic';
import { nameModel } from './models/name';

connectToMongoDB()

app.use(express.json())

app.use('/', require('./routers/getAllProductsRouter'))
