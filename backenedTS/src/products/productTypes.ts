
export interface productTypeRequest {
    productName: String;
    productDescription: String;
    price: Number;
    productModel: String;
    assignedTo?: String;
    status?: String
    action?: String
}

interface Image {
    public_id: String;
    url: String
}

interface Review {
    name: String;
    rating: Number;
    title: String;
    description: String;
}

export interface AddedProduct {
    productName: String;
    productDescription: String;
    productModel: String;
    price: Number;
    rating: Number;
    stock: Number;
    numberOfReviews: Number;
    images: Image[];
    reviews: Review[];
    createdAt: Date,
}

// export type APIType = <T>(req: Request, res: Response, next: NextFunction) => Promise<void>

// interface customErrorType extends Error {
//     message: string
//     statusCode?: string
// }

// class customError extends Error implements customErrorType {
//     statusCode?: string
//     constructor(message: string, statusCode?: string) {
//         super(message)
//         if (statusCode) {
//             this.statusCode = statusCode
//         }
//     }
// }