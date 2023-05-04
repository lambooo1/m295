let books = [
    {
      "isbn": "10",
      "title": "Harry Potter",
      "year": 1949,
      "author": "George Orwell"
    },
    {
      "isbn": "20",
      "title": "To Kill a Mockingbird",
      "year": 1960,
      "author": "Harper Lee"
    },
    {
      "isbn": "30",
      "title": "The Catcher in the Rye",
      "year": 1951,
      "author": "J.D. Salinger"
    },
    {
      "isbn": "40",
      "title": "Moby-Dick",
      "year": 1851,
      "author": "Herman Melville"
    },
    {
      "isbn": "50",
      "title": "One Hundred Years of Solitude",
      "year": 1967,
      "author": "Gabriel Garcia Marquez"
    },
    {
      "isbn": "60",
      "title": "The Great Gatsby",
      "year": 1925,
      "author": "F. Scott Fitzgerald"
    },
    {
      "isbn": "70",
      "title": "The Alchemist",
      "year": 1988,
      "author": "Paulo Coelho"
    },
    {
      "isbn": "80",
      "title": "The Hobbit",
      "year": 1937,
      "author": "J.R.R. Tolkien"
    },
    {
      "isbn": "90",
      "title": "The Giver",
      "year": 1993,
      "author": "Lois Lowry"
    },
    {
        "isbn": "100",
        "title": "Peter",
        "year": 1995,
        "author": "Nikola Antic"
      }
] 

let lends = [
  {
    "id": "1",
    "customer_id": "11",
    "isbn": "9780141187761",
    "borrowed_at": "2022-04-12T10:30:00.000Z",
    "returned_at": "2022-04-19T11:45:00.000Z"
  },
  {
    "id": "2",
    "customer_id": "22",
    "isbn": "2222",
    "borrowed_at": "2022-04-20T09:15:00.000Z",
    "returned_at": "2022-04-23T13:20:00.000Z"
  },
  {
    "id": "3",
    "customer_id": "33",
    "isbn": "3333",
    "borrowed_at": "2022-04-25T14:00:00.000Z",
    "returned_at": ""
  },
  {
    "id": "4",
    "customer_id": "44",
    "isbn": "4444",
    "borrowed_at": "2022-04-28T16:45:00.000Z",
    "returned_at": "2022-05-01T11:10:00.000Z"
  },
  {
    "id": "5",
    "customer_id": "55",
    "isbn": "5555",
    "borrowed_at": "2022-05-02T08:20:00.000Z",
    "returned_at": ""
  },
  {
    "id": "6",
    "customer_id": "66",
    "isbn": "6666",
    "borrowed_at": "2022-05-03T12:30:00.000Z",
    "returned_at": ""
  },
  {
    "id": "7",
    "customer_id": "77",
    "isbn": "7777",
    "borrowed_at": "2022-05-04T09:45:00.000Z",
    "returned_at": ""
  },
  {
    "id": "8",
    "customer_id": "88",
    "isbn": "8888",
    "borrowed_at": "2022-05-04T14:20:00.000Z",
    "returned_at": "2022-05-06T16:10:00.000Z"
  }
]


export function findAll() {
    return books  
}

export function findByISBN(isbn) {
    return books.find((book) => book.isbn === isbn)
}

export function insert(book) {
    books = [...books, book]; 
}

export function replace(book) {
    books = books.map((b) => b.isbn == book.isbn ? book : b);  
}

export function remove(isbn) {
    books = books.filter((b) => b.isbn !== isbn); 
}

export function findAllLends() {
  return lends  
} 

export function findByIDLends(id) {
  return lends.find((lend) => lend.id === id)
} 

export function insertlends(lend) {
  lends = [...lends, lend]; 
}

export function replaceLends(lend) {
  lends = lends.map((l) => l.id == lend.id ? lend : l);  
}
