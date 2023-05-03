import express from "express";

const app = express(); 
const port = 3000


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/now", (req, res) => {
    const tz = req.query.tz || "Europe/Berlin";
    const date = new Date().toLocaleTimeString('de-CH', {timeZone: tz})
    res.send(`${tz}: ${date}`)
    //url: http://localhost:3000/now?tzuct
})



app.listen(port, () => {
    console.log("Server ist gestartet.");
});
