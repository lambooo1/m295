import express, { request } from "express";
import cors from "cors"; 

const app = express(); 
const port = 3002
const names = ['Hans', 'Bart', 'Lisa']

app.use(express.urlencoded());
app.use(cors()); 

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

	response.send(`
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<div class="container">
			<h1 class="text-center mt-3 mb-3">Submit Form Data in Node.js</h1>
			<div class="card">
				<div class="card-header">Sample Form</div>
				<div class="card-body">
					<form method="POST" action="/">
						<div class="mb-3">
							<label>First Name</label>
							<input type="text" name="first_name" id="first_name" class="form-control" />
						</div>
						<div class="mb-3">
							<label>Last Name</label>
							<input type="text" name="last_name" id="last_name" class="form-control" />
						</div>
						<div class="mb-3">
		                	<label>Email Address</label>
		                	<input type="text" name="email_address" id="email_address" class="form-control" />
		                </div>
		                <div class="mb-3">
		                	<input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
		                </div>
					</form>
				</div>
			</div>
		</div>
	`);


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