//your JS code here. If required.
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submit = document.getElementById("submit");
const booList = document.getElementById("book-list");


function addBook(){
	if(title.value === "" || author.value === "" || isbn.value === ""){
		alert("Please fill in all the details");
		return;
	}
	const row = document.createElement("tr");
      
    row.innerHTML = `
	<td>${title.value}</td>
	<td>${author.value}</td>
	<td>${isbn.value}</td>
	<td><button class="delete">X</button></td>`;


	bookList.appendChild(row);

	title.value ="";
	authoe.value ="";
	isbn.value ="";
}


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});

bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

