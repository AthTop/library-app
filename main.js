const myLibrary = [
];

// Constructor for Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
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
    myLibrary.forEach((book, index) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.dataset.bookIndex = index;
        Object.keys(book).forEach(key => {
            const newP = document.createElement("p");
            if (key === "read") {
                if (book[key]) newP.textContent = "read : Yes";
                if (!book[key]) newP.textContent = "read : No";
                const readDiv = document.createElement("div");
                const changeStatusButton = document.createElement("button");
                changeStatusButton.classList.add("change-status");
                readDiv.append(newP);
                readDiv.append(changeStatusButton);
                newDiv.append(readDiv);
            }
            else {
                newP.textContent = `${key} : ${book[key]}`;
                newDiv.append(newP);
            }
        });
        const rmButton = document.createElement("button");
        rmButton.textContent = "Remove";
        rmButton.classList.add("remove-button");
        newDiv.append(rmButton);
        element.append(newDiv);
    })
}

function removeBook(bookdcard) {
    arrayIndex = bookdcard.dataset.bookIndex;
    myLibrary.splice(arrayIndex, 1);
    displayBooks(library);
}

function changeReadStatus(book) {
    arrayIndex = book.dataset.bookIndex;
    myLibrary[arrayIndex].changeReadStatus();
    displayBooks(library);
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
const library = document.querySelector(".library");

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
    displayBooks(library);
});

library.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
        removeBook(e.target.parentElement);
    }
    if (e.target.classList.contains("change-status")) {
        changeReadStatus(e.target.parentElement.parentElement);
    }
});

