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
// console.log(parseCoordinate({ x: 3, y: 6 }));
// console.log(parseCoordinate(10, 13));
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
// const newErrorResult = errImplementation(3);b 
// console.log(newErrorResult);

var lengthOfLongestSubstring = function (s) {
    const arr = []
    let breaking = false
    console.log('result', s.split(" ").join("").length)
    if (s.split(" ").join("").length < 1) {
        return s.length
    }

    for (let i = 0; i < s.length - 1 && !breaking; i++) {
        let substr = s[i]
        // console.log(substr)
        for (let j = i + 1; j < s.length; j++) {
            // console.log(j)
            if (j === s.length - 1) {
                breaking = true
            }
            if (substr.includes(s[j])) {
                break
            }
            substr = substr + s[j]
        }
        arr.push(substr)
    }
    console.log(arr)
    const arrlength = arr.map(a => a.length)
    return Math.max(...arrlength)
}



var lengthOfLongestSubstringOptimized = function (s) {
    let currentString = [];
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(currentString)
        const currentCharacterPosition = currentString.indexOf(s[i]);
        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }
        currentString.push(s[i]);
        console.log('current string', currentString)
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }
    // return longestStringLength;
}

console.log(lengthOfLongestSubstringOptimized("au"))


const p = ['mamta', 'shivam', 'preeti', 'raman']
// console.log('pringting p', p.splice(0, 1))