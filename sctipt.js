var myForm = document.getElementById("myForm");
var myInput = document.getElementById('myInput');
var myItem = document.getElementById('myItem');

myForm.addEventListener('submit', function(event) {
    event.preventDefault()
    createItem(myInput.value);
})

function createItem(Items) {
    var items = `<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button> </li>`
    myItem.insertAdjacentElement("beforeend", items)
    myInput.value = ""
    myInput.focus()
}

function deleteElement(ElementToDelete) {
    ElementToDelete.parentElement.remove()
}