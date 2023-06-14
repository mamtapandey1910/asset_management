import { Product } from "./getProductModel"
import { productTypeRequest, APIType, AddedProduct } from "./productTypes"
import { Request, Response, NextFunction } from "express"
import { catchAsynchErrors } from "../middleware/catchAsyncError"


export const getAllProducts: APIType = catchAsynchErrors(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const products: AddedProduct[] = await Product.find().catch(err => { throw new Error(err) })
        res.status(200).json({ success: true, message: 'Available products', products })
    } catch (err: unknown) {
        console.log(err)
        if (err instanceof Error) {
            res.status(500).json({ status: false, message: `something went wrong, Error: ${err.message}` })
        }
    }
})

export const addProduct: APIType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { productName, productDescription, productModel, price, reviews } = req.body
    // const productDetails: productType = { productName, productDescription, productModel, price }
    const productDetails: productTypeRequest = { ...req.body } as productTypeRequest

    try {
        const addedProduct: AddedProduct = await Product.create(productDetails)
        res.status(201).json({ success: true, message: 'product has been added', product: addedProduct })
    } catch (err: any) {
        console.log(err)
        res.status(400).send({ success: false, message: `An error occured, Error: ${err.message}` })
    }
}