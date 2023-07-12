export class APIFeatures {
    items: any[]
    constructor(items: any) {
        this.items = items
    }

    myfilter(name: String) {
        const items = this.items.filter(item => item.name == name)
        this.items = items
        return this
    }

    mysort(sortType: String) {
        if (sortType === 'ascending') {
            const sortedItems = this.items.sort((a, b) => a.price - b.price)
            this.items = sortedItems
            return this
        }

        if (sortType === 'descending') {
            const sortedItems = this.items.sort((a, b) => b.price - a.price)
            this.items = sortedItems
            return this
        }
    }

    search(id: any) {
        const items = this.items.filter(item => item._id === id)
        this.items = items
        return this
    }

    pagination(currentPage: number) {
        const maxitems: number = 2
        const startIndex: number = (currentPage - 1) * maxitems
        const endIndex = startIndex + maxitems
        const itemsToShow = this.items.slice(startIndex, endIndex)
        this.items = itemsToShow
        return this
    }
}

// const obj = new APIFeatures([
//     {
//         "_id": "64897085d62d91bd3c7422b8",
//         "productName": "mouse",
//         "productDescription": "medium size",
//         "productModel": "latest",
//         "price": 100,
//         "rating": 2,
//         "stock": 1,
//         "numberOfReviews": 0,
//         "images": [],
//         "reviews": [],
//         "createdAt": "2023-06-14T07:47:17.158Z",
//         "__v": 0
//     },
//     {
//         "_id": "648996762ddd961471444854",
//         "productName": "laptop",
//         "productDescription": "medium size",
//         "productModel": "latest",
//         "price": 100,
//         "rating": 0,
//         "stock": 1,
//         "numberOfReviews": 0,
//         "images": [],
//         "reviews": [],
//         "createdAt": "2023-06-14T10:29:10.417Z",
//         "__v": 0
//     },
//     {
//         "_id": "64899a930998f900389b54bc",
//         "productName": "laptop",
//         "productDescription": "medium size",
//         "productModel": "latest",
//         "price": 100,
//         "rating": 0,
//         "stock": 1,
//         "numberOfReviews": 0,
//         "images": [],
//         "reviews": [],
//         "createdAt": "2023-06-14T10:46:43.751Z",
//         "__v": 0
//     },
//     {
//         "_id": "64899bfe0998f900389b54be",
//         "productName": "laptop",
//         "productDescription": "medium size",
//         "productModel": "latest",
//         "price": 100,
//         "rating": 0,
//         "stock": 1,
//         "numberOfReviews": 0,
//         "images": [],
//         "reviews": [],
//         "createdAt": "2023-06-14T10:52:46.434Z",
//         "__v": 0
//     },
//     {
//         "_id": "6489a23f8f35cd0abd867cb3",
//         "productName": "laptop",
//         "productDescription": "medium size",
//         "productModel": "old",
//         "price": 100,
//         "rating": 0,
//         "stock": 1,
//         "numberOfReviews": 0,
//         "images": [],
//         "reviews": [],
//         "createdAt": "2023-06-14T11:19:27.734Z",
//         "__v": 0
//     }
// ])

// const res = obj.sort('ascending')
// console.log('logged response', res)