/**
 * @author: code@zquint.xyz
 * @description: freecodecamp.org intermediate algorithm solutions
 * Note: I am not naming these functions
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


/**
 * Get filtered array of objects in original array by key/value pairs in a query
 * @param {*} collection array of objects
 * @param {*} query object key and value to match
 * @returns Array of collection objects matching key and value from "source"
 */
function whatIsInAName(collection, query) {
    let arr = []
    collection.forEach((o) => {
        let mismatch = false
        Object.getOwnPropertyNames(query).forEach((key) => {
            let index = arr.indexOf(o)
            if (o[key] == query[key] && !mismatch) {
                if (index === -1) arr.push(o)
            } else {
                mismatch = true
                if (index >= 0) arr.pop()
            }
        })
    })
    return arr
}
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
//     { "apple": 1, "bat": 2 }))


/**
 * Converts string to spinal case string
 * @param {string} str string to convert to spinal case
 * @returns Spinal case string
 */
function spinalCase(str) {
    str = str.replace(/_/g, '-')
    str = str.replace(/([A-Z])/g, "-$1")
    str = str.replace(/\W{1,}/g, '-')
    str = str.replace(/^\W/g, '')
    str = str.replace(/\W$/g, '')
    str = str.toLowerCase()
    return str;
}
// console.log(spinalCase("TheAndy_Griffith_Show-"))


/**
 * Converts a string to a pig latin string
 * @param {string} str String to convert to pig latin
 * @returns String converted to pig latin
 */
function translatePigLatin(str) {
    if (!/[a|e|i|o|u]/.test(str)) str += 'ay'
    else if (!/[a|e|i|o|u]/.test(str.charAt(0))) {
        str = str.replace(/([^a|e|i|o|u]+)([\1-^]+)/gi, '$2$1ay')
    }
    else str += 'way'
    return str
}
// console.log(translatePigLatin("paragraphs"))


/**
 * Find and replace in a string while preserving case of first letter
 * @param {string} str String in which to find and replace based on 2nd and 3rd parameters
 * @param {string} before Characters inside str to match for replacement
 * @param {string} after Characters to replace 'before' param with
 * @returns String with replaced characters
 */
function myReplace(str, before, after) {
    if (/[A-Z]/.test(before.charAt(0))) after = after.charAt(0).toUpperCase() + after.slice(1)
    else after = after.toLowerCase()
    str = str.replace(before, after)
    return str;
}
// console.log(myReplace("Let us go to the Store", "Store", "mall"))


/**
 * Pairs given DNA elements with correct base
 * @param {string} str String of chracters representing DNA elements
 * @returns 2D array of provided DNA elements matched with base pairs
 */
function pairElement(str) {
    let arr = []
    const pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        let arr2 = []
        arr2.push(str[i])
        arr2.push(pairs[str[i]])
        arr.push(arr2)
    }
    return arr;
}
// console.log(pairElement("GCG"))


/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} str Alphabetic sequence of characters
 * @returns Single missing character in a sequence, or undefined if range is continuous
 */
function fearNotLetter(str) {
    let missing
    for (let i = 0; i < str.length - 1; i++) {
        let char = str.charCodeAt(i)
        let nextChar = str.charCodeAt(i + 1)
        if ((nextChar - char) > 1) {
            missing = String.fromCharCode(char + 1)
        }
    }
    return missing;
}
// console.log(fearNotLetter("abcdf"))


/**
 * Joins elements from multiple arrays except duplicates
 * @param  {...Array<any>} arr Arrays with elements to compare
 * @returns new array with unique elements from all arrays
 */
function uniteUnique(...arr) {
    let newArr = []
    arr.forEach((set) => {
        set.forEach((num) => {
            (newArr.indexOf(num) == -1 && newArr.push(num))
        })
    })
    return newArr
}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


/**
 * HTML string sanitizer
 * @param {sring} str String to HTML sanitize
 * @returns string with HTML characters converted to character codes
 */
function convertHTML(str) {
    str = str.replace(/&/g, '&amp;')
    str = str.replace(/</g, '&lt;')
    str = str.replace(/>/g, '&gt;')
    str = str.replace(/"/g, '&quot;')
    str = str.replace(/'/g, '&apos;')
    return str
}
// console.log(convertHTML("<?php echo '<script>alert('Press alt+f4 for a prize')</script> ?>"))


/**
 * Given a positive integer num, return the sum of all odd
 * Fibonacci numbers that are less than or equal to num
 * @param {number} max maximum number of fib sequence to sum
 * @param {number} n1 previous number
 * @param {number} n2 next number
 * @param {number} sum total of odd numbers
 * @returns Sum of odd numbers up to and including max
 */
function sumFibs(max, n1 = 0, n2 = 1, sum = 0) {
    if (n2 > max) return sum
    if (n2 % 2) sum += n2
    return sumFibs(max, n2, n1 + n2, sum)
}
// console.log(sumFibs(4))



// // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// function sumPrimes(max) {
//     const checkPrime = (num) => {
//         if ((num === 2 || num === 3) || num % 2 && !Number.isInteger(num / 3)) {
//             return true
//         }
//         return false
//     }

//     if (n1 <= 1) return sum
//     for (let i = max; i > 1; i--) {
//         (
//     }
//     return num
// }

// console.log(sumPrimes(10))



// console.log(checkPrime(process.argv[2]))







// PROJECTS

/**
 * Checks a string for palindromicity after, excluding non-alphanumeric characters
 * @param {string} str String to check for palindromicity
 * @returns true if palindrome, false if not
 */
function palindrome(str) {
    let alphaNumStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let chars = alphaNumStr.split("")
    let pal = []
    while (chars.length > 0) {
        pal.push(chars.pop())
    }
    return (pal.join('') === alphaNumStr)
}
// console.log(palindrome("1- A man, a plan, a canal. Panama 1-"))




// function convertToRoman(val) {
//     const numerals = {
//         1: "I",
//         5: "V",
//         10: "X",
//         50: "L",
//         100: "C",
//         500: "D",
//         1000: "M"
//     }
//     const nums = Object.keys(numerals)

//     let output = []
//     let i = 1;
//     while (i < 7) {

//         let remainder = val % nums[i]
//         console.log(i)
//         let a = (remainder)
//         val = val - (remainder)

//         remainder = val % nums[++i]
//         console.log(i)
//         let b = (remainder)
//         val = val - (remainder)

//         if (a + b === 9) {
//             output.unshift(numerals[nums[i-2]]+numerals[nums[i]])
//         } else if (a + b === 4) {
//             output.unshift(numerals[nums[i-2]]+numerals[nums[i-1]])
//         } else {
//             if (!b) {output.unshift(numerals[nums[i-2]]) }
//             for (let j = 0; j < a; j++) {
//                 output.unshift('I')
//             }
//         }
//     }
//     return output.join('')


// }
// console.log(convertToRoman(445))

















// function convertToRoman(val) {
//     const numerals = {
//         1: "I",
//         5: "V",
//         10: "X",
//         50: "L",
//         100: "C",
//         500: "D",
//         1000: "M"
//     }

//     let output = []
//     let rem = 0
//     let rep = 0

//     const nums = Object.keys(numerals)



//     for (let i = 1; i < nums.length-1; i++) {
//         rem = val % nums[i]
//         rep = rem / nums[i - 1]
//         console.log("rem " + rem)
//         console.log("rep " + rep)
//         console.log("val " + val)
//         val = val - rem

//         if (rem > 0) {
//             if (rem % 5 === 4) {
//                 output.unshift(numerals[nums[i-1]] + numerals[nums[i+1]])
//                 console.log('Noom: ' + numerals[nums[i-1]] + numerals[nums[i+1]] + 'HIT')
//                 val -= 5
//             } else if (rep === 4) {
//                 output.unshift(numerals[nums[i-1]] + numerals[nums[i]])
//                 console.log('Noom: ' + numerals[nums[i-1]] + numerals[nums[i]])
//                 // val = val - nums[rep]
//             } else {
//                 for (let t = 0; t < rep; t++) {
//                     output.unshift(numerals[nums[i - 1]])
//                     console.log('Noom: ' + numerals[nums[i - 1]])
//                 }
//             }
//         }
//         console.log()

//     }

//     return output.join('')
// }

// // 999 = CMXCIX
// // 449 = CDXLIX
// console.log('\x1b[1;37;40m' + convertToRoman(399) + '\x1b[0m');