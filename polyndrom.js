/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x === Number(String(x).split('').reverse().join('')) ? true : false
}

console.log(isPalindrome(121))
