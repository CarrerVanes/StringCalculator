function add(string) {
    var res = 0;
    if (!!string) { // 1+ numbers
        var array = string.split(',')
        return sum(array)
    }
    return res // 0 numbers
}

function sum(array) {
    var sum = 0
    array.forEach(element => {
        sum = sum + parseInt(element);
    })
    return sum;
}


module.exports = add;