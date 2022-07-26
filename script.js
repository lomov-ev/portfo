var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputNotZero() {
	return input.value.length > 0;
}

function removeElement() {
	this.parentElement.remove();
}

function toggleDone() {
	this.classList.toggle("done");
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("remove"));
	li.appendChild(removeButton);

	removeButton.addEventListener("click", removeElement);
	li.addEventListener("click", toggleDone);
	input.value = "";
}

function addListAfterClick() {
	if (inputNotZero()) createListElement();
}

function addListAfterPress(event) {
	if (inputNotZero() && event.keyCode === 13) createListElement();
}

button.addEventListener("click", addListAfterClick )

input.addEventListener("keypress", addListAfterPress)