class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    }
}

const book1 = new Book("1984", "Robert Kim", 328);
book1.displayInfo();
