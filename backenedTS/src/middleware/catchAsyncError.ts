import { Request, Response, NextFunction } from "express"
import { APIType, catchAsynchErrorType } from "./middlewareTypes"


// export type catchAsynchErrorParameterType = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

export const catchAsynchErrors: catchAsynchErrorType = (func: APIType): APIType => {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(func(req, res, next)).catch(next)
    }
}