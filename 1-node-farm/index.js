const helloMessage = 'hello world!';
console.log(helloMessage)

const fs = require('fs');
const file = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(file)