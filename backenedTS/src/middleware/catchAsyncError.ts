import { Request, Response, NextFunction } from "express"

export type catchAsynchErrorType = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

export const catchAsynchErrors = (func: catchAsynchErrorType) => {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(func(req, res, next)).catch(next)
    }
}