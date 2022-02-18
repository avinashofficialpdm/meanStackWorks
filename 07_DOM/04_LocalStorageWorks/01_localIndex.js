var book = {
    name: "Life of Avinash",
    price : 9000,
    page :300
}

// localStorage.setItem(book.name,JSON.stringify(book))

// var myBook = JSON.parse(localStorage.getItem("Life of Avinash"))
// console.log(myBook);

console.log("Life of Avinash" in localStorage);