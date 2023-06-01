const isprime = (num) => {
    for (i = 2; i <= Math.ceil(num / 2); i++) {
        const res = num % i
        if (res === 0) {
            return false
        }
    }
    return true
}

// const res = isprime(4)
// console.log(res)

const primeFactors = (num) => {
    const arr = []
    let i = 2
    while (i <= num) {
        if (isprime(i)) {
            arr.push(i)
        }
        i++
    }
    return arr
}

// console.log(primeFactors(100))

const onlyPrimeFactor = (num) => {
    const arr = []
    let i = 2
    while (i <= Math.ceil(num) / 2) {
        if (num % i === 0 && isprime(i)) {
            arr.push(i)
        }
        i++
    }
    return arr
}

// console.log(onlyPrimeFactor(69))

const fibonacciSeries = (num) => {
    const arr = [1, 1]
    for (i = 0; i < num - 2; i++) {
        const a = arr[i]
        const b = arr[i + 1]
        arr.push(a + b)
    }
    return arr
}

// console.log(fibonacciSeries(10))


const fiboSeries = [1, 1]

const fibonacciWithRecursion = (num) => {
    const i = fiboSeries[fiboSeries.length - 1]
    const j = fiboSeries[fiboSeries.length - 2]
    fiboSeries.push(i + j)
    if (fiboSeries.length < 10) {
        fibonacciWithRecursion(num - 1)
    }
}

fibonacciWithRecursion(10)

console.log(fiboSeries)
