/*For this project 
User inputs an item and adds it to the list using the add button
User can delete an item from the list 
*/

let items = []
const storageKey = "items"

const itemsDiv = document.getElementById('items')
const addBtn = document.getElementById('btn')
const input = document.getElementById('input')

addBtn.addEventListener('click', () => {
    add()
})

function add() {

    const value = input.value;

    if(value === ''){
        alert("You cann't an empty value")
        return
    }

    items.push(value)
    renderItems()

    input.value =""
    saveItems()

}

function renderItems() {
    itemsDiv.innerHTML = null;
    for (i = 0; i < items.length; i++) {
        //for(const[idx, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.textContent = items[i];
        text.style.display = "inline"
        text.style.marginRight = "10px"

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.style.width = "70px"
        button.style.fontSize = "20px"
        button.style.borderRadius = "5px"
        button.style.marginLeft = "70px"
        button.onclick = () => removeItem(items[i])

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)

    }

}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems){
        items = JSON.parse(oldItems)
         renderItems()
    }
   
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function removeItem(idx) {
    items.splice(items[i], 1)
    renderItems()
    saveItems()

}

//document.addEventListener("DOMContentLoaded", loadItems)
loadItems()
