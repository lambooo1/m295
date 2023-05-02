const fs = require('fs');


fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if err throw err;
    const str = buff.toString();
    const lines = str.split('\n').length-1;
    console.log(lines);   
})
