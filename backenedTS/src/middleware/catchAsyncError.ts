import { Request, Response, NextFunction } from "express"


export type catchAsynchErrorParameterType = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

export type catchAsynchErrorType = (func: catchAsynchErrorParameterType) => catchAsynchErrorParameterType

export const catchAsynchErrors: catchAsynchErrorType = (func: catchAsynchErrorParameterType): catchAsynchErrorParameterType => {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(func(req, res, next)).catch(next)
    }
}