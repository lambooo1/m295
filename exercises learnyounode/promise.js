const fs = require('fs')

fs.readFile(process.argv[2])

.then(inhalt => {
    console.log("Die Länge des Dateiinhalts beträgt")
})
