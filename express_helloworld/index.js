import express from "express";

const app = express(); 
const port = 3000
const names = ["Abir", "Arham", "Sadi", "Labi", "Mahdi"]


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/now", (req, res) => {
    res.send(new Date().toISOString())
})

app.get("/zli", (req, res) => {
    res.redirect("https://moodle.zli.ch/")
})

app.get("/name", (req, res) => {
    res.send(names[Math.floor(Math.random * names.length)])
})

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
