// Requiring fs module in which
// writeFile function is defined.


// SHOW HIDE FORM
function showBookInput() {
    var x = document.getElementById("bookInputFormDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
};

function showBookRemove() {
  var x = document.getElementById("bookRemoveFormDiv");
  if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
};

// FORM HANDELING FUNCTIONS AND VARIABLES 
let formInput = document.getElementById("newBookForm")
    // add book row count
    i = 4

formInput.addEventListener("submit", (event) => {
    event.preventDefault();
    let newBookName = document.getElementById("bookNameInput")
    let newAuthName = document.getElementById("authorNameInput")
    let newPageCount = document.getElementById("pageNumInput")

    // compiling data into an array to write to the file
    let data = [newBookName.value, newAuthName.value, newPageCount.value]
    // check the console to confirm the form is working
    console.log(data)
    // add new book to table
    // first create a new row, then use inner.html to add the values 
    const addRow = document.createElement("tr");
    addRow.innerHTML = '<th scope="row">' + i + '</th><td>' + newBookName.value + '</td><td>' + newAuthName.value + '</td><td>' + newPageCount.value + '</td>';
    document.getElementById("bookList").appendChild(addRow);
    alert("Your book " + newBookName.value + " was created.")
    // update book count
    i = i + 1;
});


