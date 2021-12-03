var fs = require('fs');
var input = fs.readFileSync('input3.txt', 'utf8').split('\n')

// Part 1
len = input[0].length

let gamma = '', epsilon = ''
for (let i = 0; i < len; i++) {
    let zeros = 0, ones = 0
    for (line of input) {
        if (line[i] == "0") { zeros++ } else { ones++ }
    }
    // console.log(zeros, ones)
    if (ones > zeros) { gamma = gamma + '1' } else { gamma = gamma + '0' }
    if (ones < zeros) { epsilon = epsilon + '1' } else { epsilon = epsilon + '0' }
}
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))

// Part 2
let ogr = input

for (let i = 0; i < len; i++) {
    let zeros = 0, ones = 0
    for (line of ogr) {
        if (line[i] == "0") { zeros++ } else { ones++ }
    }
    if (ones >= zeros) {
        ogr = ogr.filter(x => x[i] == 1)
    } else {
        ogr = ogr.filter(x => x[i] == 0)
    }
    if (ogr.length == 1) { break }
}

let co2_scrubber = input
for (let i = 0; i < len; i++) {
    let zeros = 0, ones = 0
    for (line of co2_scrubber) {
        if (line[i] == "0") { zeros++ } else { ones++ }
    }
    if (ones < zeros) {
        co2_scrubber = co2_scrubber.filter(x => x[i] == 1)
    } else {
        co2_scrubber = co2_scrubber.filter(x => x[i] == 0)
    }
    if (co2_scrubber.length == 1) { break }

}
console.log(parseInt(co2_scrubber[0], 2) * parseInt(ogr[0], 2))
