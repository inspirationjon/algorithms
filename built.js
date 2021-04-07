const input = 'bananan'

function sunnat(input, from, to) {
    let pustoy = ''

    for (let i = from; i < to; i++) {
        pustoy += input[i]
    }

    return pustoy
}

function count(input, search) {
    let pustoy = 0

    for (let i = 0; i < input.length; i++) {
        if (sunnat(input, i, i + search.length) === search) {
            pustoy++

            i = i + search.length - 1
        }
    }

    return pustoy
}

console.log(count(input, 'nan')) // 2
