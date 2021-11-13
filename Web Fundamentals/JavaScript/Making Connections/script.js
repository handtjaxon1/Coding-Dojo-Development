console.log("page loaded...");

function editProfile() {
    document.querySelector("#name").textContent = "Christina Aguilera";
}

function updateConnections(element) {
    // Uses the alt attribute value to determine if it was an accept button. Obviously a class would have worked good, but I thougt this was interesting to try out with attributes on elements.
    if (element.getAttribute("alt") === "accept") {
        // If the "accept" image was clicked then add 1 to the total connections the user has
        updateConnectionAmount("#total-connections", 1);
    }
    // Regardless of the image that's clicked, decrease the pending requests and remove the request
    updateConnectionAmount("#pending-connections", -1);
    removeConnectionRequest(element);
}

// Updates the text of one of the connection amounts (either total connections or pending connections)
function updateConnectionAmount(id, amount) {
    var element = document.querySelector(id);
    var newAmount = parseInt(element.textContent, 10); // Converts the text to a number so we can add/subtract to it
    newAmount = newAmount + amount;
    element.textContent = newAmount;
}

function removeConnectionRequest(icon) {
    /* Finds and removes the parent card item when the one of the icons is clicked */
    icon.closest(".card-list-item").remove();
}

// Get all the buttons icons and programmatically add onclick events to remove the element once clicked
var icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
    icon.addEventListener("click", function(){ updateConnections(icon); })
});
