import { Request, Response, NextFunction } from 'express'


export type APIType = <T>(req: Request, res: Response, next: NextFunction) => void

export type catchAsynchErrorType = (func: APIType) => APIType

