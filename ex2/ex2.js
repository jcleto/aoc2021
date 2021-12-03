var fs = require('fs');
var input = fs.readFileSync('input2.txt', 'utf8').split('\n')

// Part 1
let horizontal_pos = 0
let depth = 0

input.forEach(function (value) { 
  r = value.split(' ')
  switch(r[0]) {
    case 'forward':
      horizontal_pos = horizontal_pos + Number(r[1])
      break;
    case 'up':
      depth = depth -  Number(r[1])
      break;
    case 'down':
      depth = depth +  Number(r[1])
  }
})

// console.log(horizontal_pos)
// console.log(depth)
// console.log(horizontal_pos * depth)


// Part 2

horizontal_pos = 0
depth = 0
aim = 0

input.forEach(function (value) { 
  r = value.split(' ')
  switch(r[0]) {
    case 'forward':
      horizontal_pos = horizontal_pos + Number(r[1])
      depth = depth + aim * Number(r[1]) 
      break;
    case 'up':
      aim = aim - Number(r[1])
      break;
    case 'down':
      aim = aim + Number(r[1])
  }
})

console.log(horizontal_pos)
console.log(depth)
console.log(aim)
console.log(horizontal_pos * depth)
