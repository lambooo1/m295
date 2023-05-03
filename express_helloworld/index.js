import express from "express";


const app = express(); 
const port = 3000
const names = ["Abir", "Arham", "Sadi", "Labi", "Mahdi"]
const image = "/workspaces/m295/express_helloworld/image-data.jpg"
const htmlfile = "/workspaces/m295/home.html" 


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

app.get("/html", (req, res) => {
    res.sendFile(htmlfile)
})

app.get("/image", (req, res) => {
    res.sendFile(image) 
})

app.get("/teapot", (req, res) => {
    res.sendStatus(418) 
})


app.get("/user-agent", (req, res) => {
    req.d
})

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
