import { readFileSync } from 'fs'

const data = readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' }).split('\r\n');

console.log('Solution #1 : ', challenge1())
console.log('Solution #2 : ', challenge2())



/**
 * Determine which games would have been possible 
 * if the bag had been loaded with only 
 * 
 * 12 red cubes, 
 * 13 green cubes, and 
 * 14 blue cubes. 
 * 
 * What is the sum of the IDs of those games?
 */
function challenge1() {
    let sum = 0;

    data.forEach((entry) => {
        let possible = true

        const MAX_RED = 12
        const MAX_GREEN = 13
        const MAX_BLUE = 14

        let id = Number.parseInt(entry.split(':')[0].replace('Game', '').replace(' ', '').replace(':', ''))
        let rounds = entry.split(':')[1].split(';')

        rounds.forEach((round) => {
            const values = round.replaceAll(' ', '').split(',')

            if(Number.parseInt(values.find((value) => value.includes('red'))) > MAX_RED) {
                possible = false
            }

            if(Number.parseInt(values.find((value) => value.includes('green'))) > MAX_GREEN) {
                possible = false
            }

            if(Number.parseInt(values.find((value) => value.includes('blue'))) > MAX_BLUE) {
                possible = false
            }
        })

        if(possible) {
            sum += id;
        }
    })

    return sum
}

/**
 * The power of a set of cubes is equal to 
 * the numbers of red, green, and blue cubes multiplied together. 
 * 
 * The power of the minimum set of cubes in game 1 is 48. 
 * In games 2-5 it was 12, 1560, 630, and 36, respectively. 
 * Adding up these five powers produces the sum 2286.
 * 
 * For each game, find the minimum set of cubes that must have been present. 
 * What is the sum of the power of these sets?
 */
function challenge2() {
    let sum = 0;

    data.forEach((entry) => {
        let min_red = 0
        let min_green = 0
        let min_blue = 0

        let rounds = entry.split(':')[1].split(';')

        rounds.forEach((round) => {
            const values = round.replaceAll(' ', '').split(',')

            const red = Number.parseInt(values.find((value) => value.includes('red')))
            const green = Number.parseInt(values.find((value) => value.includes('green')))
            const blue = Number.parseInt(values.find((value) => value.includes('blue')))

            if(red > min_red) {
                min_red = red
            }

            if(green > min_green) {
                min_green = green
            }

            if(blue > min_blue) {
                min_blue = blue
            }
        })
        
        sum += (min_red * min_green * min_blue)
    })

    return sum;
}