import express, { request } from "express";
//import cors from "cors"; 

const app = express(); 
const port = 3050
const names = ['Hans', 'Bart', 'Lisa']
const postname = "/workspaces/m295/request_tasks/postname.html" 

app.use(express.urlencoded());
//app.use(cors()); 

/*
app.get("/", (req, res) => {
    res.send("Hello World")
})
*/

app.get("/now", (req, res) => {
    const tz = req.query.tz || "Europe/Berlin";
    const date = new Date().toLocaleTimeString('de-CH', {timeZone: tz})
    res.send(`${tz}: ${date}`)
    //url http://localhost:3000/now?tzuct
})

app.get('/', function(request, response, next){
	response.sendFile(postname);
});

app.post('/', function(request, response, next){
	response.send(request.body);
});

app.delete('/name', (res, req) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
