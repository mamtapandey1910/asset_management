import mongoose from "mongoose";
const Schema = mongoose.Schema

const nameSchma = new Schema({
    name: {
        type: String,
    }
})

export const nameModel = mongoose.model('name', nameSchma)