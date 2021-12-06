const digit = /\d/
const firstline_regex = /\/\/./
const bad_words = ['\\', '*', '.', '+', '\/', '?', '\|', '[', ']', '`']
const brackets = /\/\/\[(.*?)\]/
const zero = 0

function add(string) {
    var res = zero;
    var delimiter
    if (!!string) { // 1+ numbers
        var firstline = string.split('\n')[0];
        delimiter = new RegExp("\n|" + getCustomdelimiter(firstline)) //build the regex + custom delimiter or ','
        var array = string.split(delimiter)
        res = sum(array)
    }
    return res // 0 numbers
}

function sum(array) {
    var sum = zero
    var negatives = check_negatives(array);
    if (negatives.length > 0) {
        throw new TypeError('negatives not allowed ' + negatives.toString())
    } else {
        array.forEach(element => {
            sum = sum + (isNaN(parseInt(element)) || parseInt(element) > 1000 ? zero : parseInt(element)); //if "" or not parsable element -> 0
        })
        return sum;
    }

}

function getCustomdelimiter(firstline) {
    var res = "," //default delimter
    if (!digit.test(firstline.charAt(0)) && firstline_regex.test(firstline)) { //not digit and start with /
        if (firstline.match(brackets)) {
            res = firstline.substring(3, firstline.indexOf("]"))
        } else {
            res = firstline.substring(2, 3)
        }
    }
    return fixdelimiter(res)
}

function fixdelimiter(string) {
    var res = ""
    for (var i = 0; i < string.length; i++) {
        if (bad_words.includes(string[i])) { //there is a string
            res = res + "\\" + string[i]
        } else {
            res = res + string[i]
        }
    }
    return res;
}

function check_negatives(numbers) {
    res = []
    numbers.forEach(element => {
        if (element < zero) res.push(element)
    })
    return res
}

module.exports = add;