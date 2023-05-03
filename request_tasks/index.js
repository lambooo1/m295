import express, { request } from "express";
import cors from "cors"; 
import multer from "multer"; 

const app = express(); 
const port = 3065 
const postname = "/workspaces/m295/request_tasks/postname.html" 
let names = ['Hans', 'Bart', 'Lisa', 'Lambo', 'Nikola'] 

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
//app.use(express.static("request_tasks" + "/public")); 

app.get("/now", (req, res) => {
    const tz = req.query.tz || "Europe/Berlin";
    const date = new Date().toLocaleTimeString('de-CH', {timeZone: tz})
    res.send(`${tz}: ${date}`)
    //url http://localhost:3000/now?tzuct
})

app.get('/', (req, res) => {
	res.send("Hello World");
});

app.get('/name', (req, res) => {
	res.sendFile(postname);
});
  
app.post('/names-post', (req, res) => {
    let name = req.body.namepost;
    names.push(name); 
	res.send(names);
});

app.delete('/namesdel', multer().none(), (req, res) => {
    console.log(req.body.namedelete);
    names = names.filter((n) => n !== req.body.name);
    console.log(names);
    res.sendStatus(204);
  });

app.get('/secret2', (request, response) => {
    const info = req.get(Headers)
	if (info == "BasicaGFja2VyOjEyMzQ="){
        res.sendStatus(201);
    }else {
        res.sendStatus(401); 
    }
});

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
