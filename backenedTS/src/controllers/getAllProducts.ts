import { Request, Response, NextFunction } from "express";

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    res.send('get all products have been called')
}