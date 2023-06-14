import { Request, Response, NextFunction } from "express";
import { catchAsynchErrors, catchAsynchErrorParameterType } from "../middleware/catchAsyncError";

type getAllProductsType = (req: Request, res: Response, nex: NextFunction) => Promise<void> | void

export const getAllProducts: getAllProductsType = catchAsynchErrors((req: Request,
    res: Response,
    next: NextFunction): Promise<void> | void => {
    res.send('get all products have been called')
})