"use strict";
const arrayMutate = (num, mutatefunc) => {
    const res = num.map(mutatefunc);
    return res;
};
const res = arrayMutate([3, 12, 5, 6], (v) => v * 2);
function createAdder(num) {
    return (val) => num + val;
}
const addName = createAdder('mamta');
const fullName = addName('pandey');
function parseCoordinateWithObject(obj) {
    return { ...obj };
}
function parseCoordinateWithNumber(num1, num2) {
    return {
        x: num1,
        y: num2
    };
}
function parseCoordinate(args1, args2) {
    if (typeof args1 === 'object') {
        return { ...args1 };
    }
    else {
        return {
            x: args1,
            y: args2
        };
    }
}
console.log(parseCoordinate({ x: 3, y: 6 }));
console.log(parseCoordinate(10, 13));
class NewError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
function errImplementation(num) {
    throw new NewError('typeerror occured', '402');
}
const newErrorResult = errImplementation(3);
console.log(newErrorResult);
