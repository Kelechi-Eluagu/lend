const bookstore = {
  books: [
    {
      id: 1,
      title: 'Half of a yellow sun',
      author: 'Chimamanda Adiche',
      year: 2012,
      isLent: false,
    },
    {
      id: 2,
      title: 'Lord of the rings',
      author: 'J.K Rowlings',
      year: 1996,
      isLent: false,
    },
    {
      id: 3,
      title: 'There was a country',
      author: 'Chinua Achebe',
      year: 1998,
      isLent: false,
    }
  ],
  displayBooks: function() {
    if (this.books.length === 0) {
      console.log("Sorry ! No available books");
    } 
    else {
      availableBooks = this.books.filter(book => book.isLent === false)
        .map((book) => {
          const { id, title, author, year} = book
          const newBook = {id, title, author, year }
          return newBook;
      })
      console.log(availableBooks);
    }
  },
  addBook: function (title, author, year) {
    id = this.books.length + 1
    if((title !== undefined && author !== undefined && year !== undefined) && (title !== "" && author !== '' && year !== "")){
      this.books.push({
        id,
        title,
        author,
        year,
        isLent: false,
      });
      this.displayBooks();
      this.id++
    } else {
      console.log("Please enter all required book details")
    } 
  },
  lendBook: function (id) {
    searchSuccess = false
    this.books.forEach(book => {
      if (book.id == id && !book.isLent) {
        book.isLent = true;
        searchSuccess = true;
        console.log(`Great! "${book.title}" is an excellent book choice, ensure to return when done.`);
        this.displayBooks();
      }
    });
    if(!searchSuccess) {
      console.log("Sorry! No record found for that book ID. Choose from our list of available books");
      setTimeout(() => {
        this.displayBooks();
      },2000)
    }
  },
  returnBook: function (id) {
    searchSuccess = false
    this.books.forEach((book) => {
      if (book.id == id && book.isLent) {
          book.isLent = false;
          searchSuccess = true
          console.log(`Good Job! ${book.title} successfully returned. Hope you enjoyed the read.`);
        this.displayBooks();
      }
    });
    if(!searchSuccess) {
      console.log("Sorry! No record found for that book ID. Ensure you entering the correct ID");
      setTimeout(() => {
        this.displayBooks();
      },2000)
    }
  }
};
const store = Object.create(bookstore);
store.displayBooks();