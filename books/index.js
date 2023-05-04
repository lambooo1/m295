import express from "express";
import fs from "fs";  
//import * as books from "/workspaces/m295/books/books.json" assert {type : 'json'}
import { type } from "os";
//import { findAll } from "/workspaces/m295/books/books.js"; 
import { findAll, remove, replace, insert, findByISBN, findAllLends, findByIDLends, 
    insertlends, replaceLends, checkStatus } from "./booksfunctions.js"


const app = express(); 
const port = 3055

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.send("Hello World")
})
/*
app.get("/books", (req, res) => {
    try {
        res.status(200).json({
            books
        });
        } catch (error) {
            res.status(500).json({
            message: "Failed to retrieve all books",
            });
        }
})
*/

app.get("/books", (req, res) => {
    try{
        res.send(findAll());
    }
    catch{
        res.sendStatus(500).send("Failed to get books.") 
    }
})

app.get("/books/:isbn", (req, res) => {
    try{
        res.send(findByISBN(req.params.isbn))
    }
    catch{
        res.sendStatus(404).send("Failed to get book.") 
    }
})

app.delete("/books/:isbn", (req, res) => {
    remove(req.params.isbn)
    res.sendStatus(204);
})

app.post("/books", (req, res) => {
    const newBook = {
        "isbn": "500",
        "title": "Nikgola",
        "year": 1995,
        "author": "Nikola Antic"
    }
    insert(newBook)
    res.send(findAll())
})

app.put("/books/:isbn", (req, res) => {
    const putisbn = req.params.isbn
    const putBook = {
        "isbn": putisbn,
        "title": "meroo",
        "year": 187,
        "author": "mero Antic"
    }
    replace(putBook)
    res.send(findAll()) 
})

app.get("/lends", (req, res) => {

    
    try{
        res.send(findAllLends());
    }
    catch{
        res.sendStatus(500).send("Failed to get lends.") 
    }
})

app.get("/lends/:id", (req, res) => {
    try{
        res.send(findByIDLends(req.params.id))
    }
    catch{
        res.sendStatus(404).send("Failed to get lend.") 
    }
})

app.post("/lends", (req, res) => {
    const newLend = {
        "id": "9",
        "customer_id": "99",
        "isbn": "9999",
        "borrowed_at": "2022-05-04T14:20:00.000Z",
        "returned_at": "2022-05-06T16:10:00.000Z"
      }
    insertlends(newLend)
    res.send(findAllLends())
})

app.patch("/lends/:id", (req, res) => {
    const patchid = req.params.id
    const newLend = {
        "id": patchid,
        "customer_id": req.query.customer_id,
        "isbn": "9999",
        "borrowed_at": "2022-05-04T14:20:00.000Z",
        "returned_at": "2022-05-06T16:10:00.000Z"
    }
    replaceLends(newLend)
    res.send(findByIDLends(patchid))
    //http://localhost:3055/lends/5?customer_id=333 
})

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
