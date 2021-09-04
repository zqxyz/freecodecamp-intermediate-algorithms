/**
 * Throwback to the mathmatical dark ages when numbers were letters
 * @param {number} userValue Number to convert to Roman numerals
 * @returns Superbowl counting system equivalant of given value
 */
function numberToRomans(userValue) {
    const romans = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    const nums = Object.keys(romans)

    const convertByPlace = (value, index = nums.length - 1, remainder = value, output = []) => {
        if (value <= 0) {return output}
        while (remainder == value) {
            remainder = value % nums[index]
            index = index - 1
        }

        output.push(remainder)

        value = value - remainder
        romanCount = value / nums[index]

        console.log(value)

        for (let i = 0; i < romanCount; i++) {
            console.log(romans[nums[index]])
        }

        return convertByPlace(value, index, remainder, output)
    }
    return convertByPlace(userValue)
}
console.log(numberToRomans(process.argv[2]))