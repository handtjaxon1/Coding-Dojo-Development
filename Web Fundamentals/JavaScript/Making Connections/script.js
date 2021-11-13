console.log("page loaded...");

function editProfile() {
    document.querySelector("#name").textContent = "Christina Aguilera";
}

function updateConnections(element) {
    // Uses the alt attribute value to determine if it was an accept button. Obviously a class would have worked good, but I thougt this was interesting to try out with attributes on elements.
    if (element.getAttribute("alt") === "accept") {
        updateConnectionAmount("#total-connections", 1);
    }
    updateConnectionAmount("#pending-connections", -1);
    removeConnectionRequest(element);
}

function updateConnectionAmount(id, amount) {
    var element = document.querySelector(id);
    var newAmount = parseInt(element.textContent, 10);
    newAmount = newAmount + amount;
    element.textContent = newAmount;
}

function removeConnectionRequest(icon) {
    /* Finds and removes the parent card item when the one of the icons is clicked */
    icon.closest(".card-list-item").remove();
}

var icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
    icon.addEventListener("click", function(){ updateConnections(icon); })
});
