import { Request, Response, NextFunction } from "express"
import fs from 'fs'
import path from 'path'
import { profilePic } from "../models/profilePic"

export const uploadProfilePicture = (req: Request, res: Response, next: NextFunction) => {
    // const { filename } = req.file
    const currentDirectory = __dirname
    const fileDirectory = currentDirectory.slice(0, currentDirectory.lastIndexOf('/'))
    // if (!req.file) {
    //     res.send('no file has been provided')
    // }
    const fileObj = {
        fileName: req.file?.filename,
        img: {
            data: fs.readFileSync(path.join(fileDirectory + '/images/' + req.file?.filename)),
            contentType: 'image/png'
        }
    }
    profilePic.create(fileObj).then(dbResponse => {
        res.send('image has been uploaded')
    }).catch(err => {
        console.log(err)
        res.send('an error occured while uploading image')
    })
}