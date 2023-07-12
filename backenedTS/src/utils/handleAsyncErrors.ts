import { APIType } from "../middleware/middlewareTypes";
import { ErrorHandlerTypes } from "./typesUtils";

export class ErrorHandler extends Error implements ErrorHandlerTypes {
    statusCode: number
    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}