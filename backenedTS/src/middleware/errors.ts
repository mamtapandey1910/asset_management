import { Request, Response, NextFunction } from "express"
import { ErrorHandler } from "../utils/handleAsyncErrors"
import { ErrorHandlerTypes } from "../utils/typesUtils"

export const errors = (err: ErrorHandlerTypes, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    res.status(err.statusCode).json({ success: false, message: err.message })
}