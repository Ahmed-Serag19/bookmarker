var bookmarkInput = document.getElementById("bookmarkName");
var urlInput = document.getElementById("websiteUrl");

var bookmarkContainer;
if (localStorage.getItem("url-output") == null) {
  bookmarkContainer = [];
} else {
  bookmarkContainer = JSON.parse(localStorage.getItem("url-output"));
  displayBookmark();
}

function addbookMark() {
  if (validationBookmark() == true) {
    let bookmark = {
      input: bookmarkInput.value,
      url: urlInput.value,
    };

    bookmarkContainer.push(bookmark);
    displayBookmark();
    localStorage.setItem("url-output", JSON.stringify(bookmarkContainer));
    clearBookmark();
  } else {
    alert("Please fill all inputs");
  }
}

function clearBookmark() {
  bookmarkInput.value = "";
  urlInput.value = "";
}

function displayBookmark() {
  let cartoona = "";
  for (let i = 0; i < bookmarkContainer.length; i++) {
    cartoona += `
                <div class="url-container my-5">
                  <h4 class="col-2">${bookmarkContainer[i].input}</h4>
                  <button class="btn bg-primary mx-3"><a target=”_blank” href="https://${bookmarkContainer[i].url}">Visit</a></button>
                  <button onclick="deleteBookmark(${i})" class="btn bg-danger">Delete</button>
                </div>
        `;
  }
  console.log(bookmarkContainer);
  document.getElementById("url-output").innerHTML = cartoona;
}

function validationBookmark() {
  if (bookmarkInput.value != "" && urlInput.value != "") {
    return true;
  } else {
    return false;
  }
}

function deleteBookmark(index) {
  bookmarkContainer.splice(index, 1);
  localStorage.setItem("url-output", JSON.stringify(bookmarkContainer));
  displayBookmark();
}
