var fs = require('fs');

var input = fs.readFileSync('input1.txt', 'utf8').split('\n').map(Number)

//// Part 1 ///
let res1 = 0
let lastElem = input[0]

for(current of input) {
    // console.log('compare', lastElem, current)
    if (current > lastElem) {
        res1 = res1 + 1
    }
    lastElem = current
}

console.log('res1', res1)

//// Part 2 ////
let win1, win2, res2=0

input.forEach(function (value, i) {
    if (i < input.length - 3) {
        win1 = value + input[i + 1] + input[i + 2]
        win2 = input[i + 1] + input[i + 2] + input[i + 3]
        // console.log('sum:', i, win1, win2)
        if (win2 > win1) { res2 = res2 + 1 }
    }
});
console.log('res2', res2);