import express from "express";
import fs from "fs";  
//import * as books from "/workspaces/m295/books/books.json" assert {type : 'json'}
import { type } from "os";
//import { findAll } from "/workspaces/m295/books/books.js"; 
import { findAll, remove, replace, insert, findByISBN } from "./booksfunctions.js"



const app = express(); 
const port = 3000

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
    res.send(findAll());
})

app.get("/books/:isbn", (req, res) => {
    res.send(findByISBN(req.params.isbn))
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
    const putBook = {
        "isbn": "50",
        "title": "meroo",
        "year": 187,
        "author": "mero Antic"
    }
    replace(putBook)
    res.send(findAll()) 
})

app.listen(port, () => {
    console.log("Server ist gestartet.");
});
