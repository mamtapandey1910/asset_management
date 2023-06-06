import express from 'express';
import { uploadProfilePicture } from '../controllers/uploadProfilePic'
import { upload } from '../middleware/uploadfileMiddlware';

const Router = express.Router()

Router.post('/change_photo', upload.single('profilePic'), uploadProfilePicture)

module.exports = Router