import { Product } from "./getProductModel"
import { productTypeRequest, AddedProduct } from "./productTypes"
import { APIType } from "../middleware/middlewareTypes"
import { catchAsynchErrors } from "../middleware/catchAsyncError"
import { errors } from "../middleware/errors"
import { ErrorHandler } from "../utils/handleAsyncErrors"

export const getAllProducts: APIType = catchAsynchErrors(async (req, res, next) => {
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

export const addProduct: APIType = catchAsynchErrors(async (req, res, next): Promise<void> => {
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
})

export const updateProduct: APIType = catchAsynchErrors(
    async (req, res, next) => {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            next(new ErrorHandler('product not found', 404))
            return
        }
        const objBody = { ...req.body }
        const productRes = await Product.findByIdAndUpdate(id, objBody)
        res.status(200).json({ success: true, message: 'product has been updated', product: productRes })
    })

export const deleteProduct: APIType = catchAsynchErrors(
    async (req, res, next) => {

        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            next(new ErrorHandler('product not found', 404))
            return
        }

        const productRes = await Product.findByIdAndDelete(id)
        console.log(productRes)
        res.status(200).json({ success: true, message: "Product has been deleted" })

    })

export const getProductDetails: APIType = catchAsynchErrors(async (req, res, next) => {
    const id: string = req.params.id

    const product = await Product.findById(id)
    if (!product) {
        next(new ErrorHandler('product not found', 404))
        return
    }

    res.status(200).json({ success: true, product })
})

export const addRating: APIType = catchAsynchErrors(
    async (req, res, next) => {
        type y = [number, number]
        const p: y = [3, 5]
        const x: Number[] = [43, 6, 23]
    })


// export const searchAPI = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const id = req.params.id
//     const allItems = Product.find()


// }