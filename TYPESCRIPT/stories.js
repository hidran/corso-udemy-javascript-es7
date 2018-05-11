"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./modules/book");
//console.log(books.Categories)
//console.log(Categories)
//;console.log(MyCategories)
let book = new book_1.default();
book.year = 2017;
book.title = ' My story';
book.content = 'ddd';
console.log(book);
