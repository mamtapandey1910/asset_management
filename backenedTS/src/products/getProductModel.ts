import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
    serialNumber: {
        type: String,
        auto: true
    },
    productName: {
        type: String,
        required: [true, "Please enter product name"]
    },
    productDescription: {
        type: String,
        required: [true, "Please enter product description"]
    },
    productModel: {
        type: String,
        required: [true, 'Please enter product model']
    },
    assignedTo: {
        type: String
    },
    status: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "Please enter the price"],
        maxLength: [8, "Please cannot be more than 8 characters"]
    },
    action: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: [true, "Please enter the title"]
            },
            description: {
                type: String,
                required: [true, "Please enter the description"]
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Product = mongoose.model('product', productSchema)