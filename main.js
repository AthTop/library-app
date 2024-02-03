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
}

// create new book object and add it to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    if (!myLibrary.find(book => book.title === newBook.title)) {
        myLibrary.push(newBook);
    }
    else {
        return alert("Book exists");
    } 
}

// Go through library and create cards out of books to append to an element
function displayBooks(element) {
    element.innerHTML = "";
    myLibrary.forEach(book => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        for (const key in book) {
            const newP = document.createElement("p");
            if (key === "read") {
                if (book[key]) newP.textContent = "read : Yes";
                if (!book[key]) newP.textContent = "read : No";
            }
            else {
                newP.textContent = `${key} : ${book[key]}`;
            }
            newDiv.append(newP);
        }
        element.append(newDiv);
    })
}

// New Book form

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#new-book-form-on");
const closeButton = document.querySelector('#close-form');
const addNewBookButton = document.querySelector("#add-book");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
const main = document.querySelector(".library");

showButton.addEventListener('click' , () => {
    dialog.showModal();
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

addNewBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
    displayBooks(main);
});





