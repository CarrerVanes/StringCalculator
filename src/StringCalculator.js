function add(string) {
    var res = 0;
    if (!!string) { //0 numbers
        var array = string.split(',')
        if (array.length > 1) { //2 numbers
            res = parseInt(array[0]) + parseInt(array[1])
        } else { //1 number
            res = parseInt(array[0])
        }
    }
    return res
}


module.exports = add;