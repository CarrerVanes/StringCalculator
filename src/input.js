const fs = require('fs')
const add = require('./StringCalculator');


fs.readFile('./src/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("output: ", add(data))
})