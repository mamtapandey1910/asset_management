import mongoose, { ConnectOptions } from "mongoose";

// const options: ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

export const connectToMongoDB = (): void => {
    try {
        mongoose.connect('mongodb://127.0.0.1/AssetManagement', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions).then(res => {
            console.log('succesfully connected to mongoDB')
        }).catch(err =>
            console.log(err))
    } catch (err) {
        console.log(err)
    }
}

