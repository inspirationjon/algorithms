/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var ROMAN_NUMBERS = [
        { char: 'I', value: 1 },
        { char: 'V', value: 5 },
        { char: 'X', value: 10 },
        { char: 'L', value: 50 },
        { char: 'C', value: 100 },
        { char: 'D', value: 500 },
        { char: 'M', value: 1000 },
    ]

    var splittedInput = s.split('')
    var filteredNumbers = []

    for (let romanNum of splittedInput) {
        for (let inputNum of ROMAN_NUMBERS) {
            if (romanNum == inputNum.char) {
                filteredNumbers.push(inputNum)
            }
        }
    }

    let result = 0

    for (let i = 0; i < filteredNumbers.length; i++) {
        if (filteredNumbers[i] > filteredNumbers[i + 1]) {
            result = result + filteredNumbers[i].value
        } else {
            result = filteredNumbers[i + 1].value - filteredNumbers[i].value
        }
    }
    return result
}

console.log(romanToInt('IXX'))
