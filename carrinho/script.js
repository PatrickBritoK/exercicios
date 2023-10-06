const itemList = document.getElementById("item-list");
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");

function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${itemText}
            <button onclick="removeItem(this)">Remover</button>
        `;
        itemList.appendChild(listItem);
        itemInput.value = "";
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    itemList.removeChild(listItem);
}

addButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
