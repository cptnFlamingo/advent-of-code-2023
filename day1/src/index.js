import {readFileSync} from 'fs'

const data = readFileSync('./input.txt',
    { encoding: 'utf8', flag: 'r' }).split('\n');


const stringNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

function replaceStringNumbers(originalString) {
    let finalString = originalString
    Object.keys(stringNumbers).forEach((key) => {
        finalString = finalString.replaceAll(key, stringNumbers[key].toString())
    })
    return finalString;
}

let sum = 0;
data.forEach((entry) => {
    // Replace spelled out numbers to integer
    const modifiedEntry = replaceStringNumbers(entry)
    
    console.log(entry)
    console.log(modifiedEntry)
    
    // Keep only numbers from string
    const numbers = modifiedEntry.split('').filter((value) => !Number.isNaN(Number.parseInt(value)))
    
    if(numbers.length === 0) return;
    
    // Combine first and last number
    const value = numbers[0] + numbers[numbers.length-1]
    sum += Number.parseInt(value)

    console.log(Number.parseInt(value))
})
console.log(sum)
