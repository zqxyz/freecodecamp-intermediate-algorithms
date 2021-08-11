/**
 * @author: code@zquint.xyz
 * @description: freecodecamp.org intermediate alorithm solutions
 */


/**
 * Take arr of 2 values and sum range (ie [3,5] = 3+4+5 = 12)
 * @param {number} arr array of 2 integers
 * @returns Sum of provided values and all numbers in between
 */
function sumAll(arr) {
    const start = arr[0]
    const end = arr[1]

    let sum = start
    let x = start-end
    while (x != 0) {
        sum += (start - (x))
        x > 0 ? x-- : x++
    }

    return sum
}

console.log('sumAll [4, 12]: ' + sumAll([4, 12]))
console.log('sumAll [5, 1]:  ' + sumAll([5, 1]))
console.log('sumAll [8, 8]:  ' + sumAll([8, 8]))