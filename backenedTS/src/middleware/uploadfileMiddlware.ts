import { Request, Response, NextFunction } from "express"
import express from 'express'
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

export const upload = multer({ storage: storage })