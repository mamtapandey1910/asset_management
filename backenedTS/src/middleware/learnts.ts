const arrayMutate = (num: number[], mutatefunc: (v: number) => number): number[] => {
    const res = num.map(mutatefunc)
    return res
}

const res = arrayMutate([3, 12, 5, 6], (v) => v * 2)
// console.log(res)

type createAdderInterface = (v: string) => string

function createAdder(num: string): createAdderInterface {
    return (val: string) => num + val
}

const addName = createAdder('mamta')
const fullName = addName('pandey')
// console.log(fullName)


interface Coordinate {
    x: number,
    y: number
}

function parseCoordinateWithObject(obj: Coordinate): Coordinate {
    return { ...obj }
}

function parseCoordinateWithNumber(num1: number, num2: number): Coordinate {
    return {
        x: num1,
        y: num2
    }
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(num1: number, num2: number): Coordinate;
function parseCoordinate(args1: unknown, args2?: unknown): Coordinate {
    if (typeof args1 === 'object') {
        return { ...(args1 as Coordinate) }
    } else {
        return {
            x: args1 as number,
            y: args2 as number
        }
    }
}

console.log(parseCoordinate({ x: 3, y: 6 }))
console.log(parseCoordinate(10, 13))


// const resError = errImplementation(3)
// console.log(resError)

class NewError extends Error {
    constructor(public message: string, public statusCode?: string) {
        super(message)
        this.statusCode = statusCode
    }
}

function errImplementation(num: number): any {
    throw new NewError('typeerror occured', '402')
}

const newErrorResult = errImplementation(3)
console.log(newErrorResult)
