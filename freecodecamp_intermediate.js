/**
 * @author: code@zquint.xyz
 * @description: freecodecamp.org intermediate algorithm solutions
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
    let x = start - end
    while (x != 0) {
        sum += (start - (x))
        x > 0 ? x-- : x++
    }

    return sum
}
// console.log(sumAll([8, 3]));


/**
 * Compare two arrays for unique elements
 * @param {*} arr1 Array of numbers to compare to arr2
 * @param {*} arr2 Array of numbers to compare to arr1
 * @returns Array of items which do not appear in both arrays
 */
function diffArray(arr1, arr2) {
    let newArr = [...arr2]
    for (let i = 0; i < arr1.length; i++) {
        let val1 = arr1[i]
        let match = newArr.indexOf(val1)
        if (match > -1) newArr.splice(match, 1)
        else newArr.push(val1)
    }
    return newArr
}
// console.log(diffArray([0,2,4,5,6,8], [1,2,3,4,7,8]));


/**
 * Array pruning function
 * @param {*} arr Array of elements to be pruned
 * @param  {...any} args Arguments of elements to be removed from arr
 * @returns pruned copy of arr
 */
function destroyer(arr, ...args) {
    const remove = [...args]
    let newArr = [...arr]
    for (let i = 0; i < remove.length; i++) {
        let match = newArr.indexOf(remove[i])
        while (match > -1) {
            newArr.splice(match, 1)
            match = newArr.indexOf(remove[i])
        }
    }
    return newArr;
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// // Getting out of hand! Restarting below ------------------------------------------
// /**
//  * Find key/value pair in an array of objects
//  * @param {*} collection array of objects
//  * @param {*} query object key and value to match
//  * @returns Array of collection objects matching key and value from "source"
//  */
// function whatIsInAName(collection, query) {
//     let arr = []

//     let sourceKeys = Object.getOwnPropertyNames(query)
//     sourceKeys.forEach((key) => {

//         let sourceValue = query[key]

//         collection.forEach((o) => {
//             let props = Object.getOwnPropertyNames(o)
//             let matchKey = props.indexOf(key)
//             let matchValue = o[props[matchKey]]
//             let inArr = false;

//             while (matchKey > -1) {
//                 if (matchValue == sourceValue) {
//                     switch(inArr) {
//                         case true:
//                             break;
//                         case false:
//                             arr.push(o)
//                             inArr = true
//                             break;
//                     }
//                 } else {
//                     switch(inArr) {
//                         case true:
//                             arr.pop()
//                             break;
//                         case false:
//                             break;
//                     }
//                 }
//                 matchKey = props.indexOf(key, matchKey+1)
//                 matchValue = o[props[matchKey]]
//             }
//         })
//     })
//     return arr
// }
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 },
// { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))


// -----------------------------------------------------
/**
 * Find key/value pair in an array of objects
 * @param {*} collection array of objects
 * @param {*} query object key and value to match
 * @returns Array of collection objects matching key and value from "source"
 */
function whatIsInAName(collection, query) {
    let arr = []

    

    return arr
}

console.log(whatIsInAName([  { "apple": 1, "bat": 2 },  { "bat": 2 },  { "apple": 1, "bat": 2, "cookie": 2 }  ],
    { "apple": 1, "bat": 2 }))