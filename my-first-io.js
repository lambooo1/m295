const fs = require('fs');

const buff = fs.readFileSync(process.argv[2]);
const str = buff.toString();
const lines = str.split('\n').length-1;
console.log(lines); 