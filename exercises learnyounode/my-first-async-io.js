const fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (err) return console.error(err);
    const buff = fs.readFileSync(process.argv[2]);
    const str = buff.toString();
    const lines = str.split('\n').length-1;
    console.log(lines);   
})
