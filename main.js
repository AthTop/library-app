const myLibrary = [
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        pages: "295",
        read: true
    }
];

// Constructor for Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readStatus;
        if (this.read) {
            readStatus = "read";
        }
        else {
            readStatus = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
    }
}

// create new book object and add it to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    if (!myLibrary.find(book => book.title === newBook.title)) {
        myLibrary.push(newBook);
    }
    return "Book exists";
}

function displayBooks(doc) {
    myLibrary.forEach(book => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        for (const key in book) {
            const newP = document.createElement("p");
            // TODO add check for read and convert to string
            newP.textContent = `${key} : ${book[key]}`;
            newDiv.append(newP);
        }
        doc.append(newDiv);
    })
}

const main = document.querySelector("main");
displayBooks(main);