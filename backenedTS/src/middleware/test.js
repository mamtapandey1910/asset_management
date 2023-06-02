const arr = [10, 53, 12]
const arr2 = [2, 4, 6]

let a = 121

let reversedno = 0

while (a > 0) {
    const x = a % 10
    reversedno = (reversedno * 10) + x
    const dividend = Math.floor(a / 10)
    a = dividend
}

console.log('reversedno', reversedno)

if (reversedno === a) {
    console.log(true)
} else {
    console.log(false)
}