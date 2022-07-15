var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemsList = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function listLength() {
	return itemsList.length;
}

// Add delete button (dbtn) to new items list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var dbtn = document.createElement("button");
	dbtn.innerHTML = "Delete";
	li.appendChild(dbtn);
	dbtn.onclick = removeItem;
}

function removeItem() {
	for (var i = 0; i < listLength(); i++) {
	this.parentNode.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Add Delete button (dbtn) on the existing items list
function deleteBtn() {
	var dbtn = document.createElement("button");
	dbtn.innerHTML = "Delete";
	itemsList[i].appendChild(dbtn);
	dbtn.onclick = removeItem;
}

for(i = 0; i < listLength(); i++) {
	deleteBtn();
}

// Change text-decoration onclick
ul.onclick = function(event) {
	var target = event.target;
	target.classList.toggle("done");
}