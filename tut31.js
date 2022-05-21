console.log("Welcome To Tutorial 31");

class library {
  constructor(book, bookeeper, notes) {
    this.book = book;
    this.bookeeper = bookeeper;
    this.notes = notes;
  }
  getBookList() {
    return `this is the best book ${this.book}`;
  }
  static issueBook(bookname, user) {
    return bookname + user;
  }
}

defence = new library(23, "Rashid", "database");
console.log(library.issueBook("333", "123"));

class noters extends library {
  constructor(book, bookeeper, notes, author, pencil) {
    super(book, bookeeper, notes);
    {
      this.author = author;
      this.pencil = pencil;
    }
  }
  favoriteBooks() {
    if (book == "English") {
      return "You are eligible for issuing a book";
    } else {
      return "You are not eligible for issuing the book";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

maaz = new noters("English", "michael", "mysqlbook", "robert", "dollar");
console.log(maaz);
console.log(noters.multiply(2, 6));
