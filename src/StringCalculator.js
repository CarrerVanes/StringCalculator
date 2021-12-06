const digit = /\d/
const firstline_regex = new RegExp("//.")
const bad_words = ['\\', '*', '.', '+', '\/', '?', '\|']
const zero = 0

function add(string) {
    var res = zero;
    var delimiter
    if (!!string) { // 1+ numbers
        var firstline = string.split('\n')[0];
        var custom_delimiter = getCustomdelimiter(firstline) //get the custom delimiter or ',' if no custom delimiter
        delimiter = new RegExp("\n|" + custom_delimiter) //build the regex
        var array = string.split(delimiter)
        return sum(array)
    }
    return res // 0 numbers
}

function sum(array) {
    var sum = zero
    array.forEach(element => {
        sum = sum + (isNaN(parseInt(element)) ? zero : parseInt(element)); //if "" or not parsable element -> 0
    })
    return sum;
}


function getCustomdelimiter(firstline) {
    var res = "," //default delimter
    if (!digit.test(firstline.charAt(0)) && firstline_regex.test(firstline)) { //not digit and start with /
        res = firstline.substring(2)
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


module.exports = add;