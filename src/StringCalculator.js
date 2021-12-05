function add(string) {
    var res = 0;
    var delimiter = /,|\n/
    if (!!string) { // 1+ numbers
        var array = string.split(delimiter)
        return sum(array)
    }
    return res // 0 numbers
}

function sum(array) {
    var sum = 0
    array.forEach(element => {
        sum = sum + (isNaN(parseInt(element)) ? 0 : parseInt(element));
    })
    return sum;
}

module.exports = add;