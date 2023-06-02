import mongoose from 'mongoose'
const Schema = mongoose.Schema
const profilePhotoSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    file: {
        data: Buffer,
        contentType: String
    },
    uploadTime: {
        type: Date,
        default: Date.now
    }
})

export const profilePic = mongoose.model('profilePhoto', profilePhotoSchema)