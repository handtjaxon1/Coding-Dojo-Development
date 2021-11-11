// TODO Could implement this as an array instead of a "dictionary" but it works soooo
/* Used to track when a word has been liked already */
var likedWords = {};

function alreadyLiked(key) {
    if (likedWords.hasOwnProperty(key)) {
        return true;
    } else {
        likedWords[key] = true;
        return false;
    }
}

function updateLogin(element) {
    element.textContent = "Logout";
}

function removeAddDef(element) {
    element.remove();
}

function liked(element, id) {
    if (!alreadyLiked(id)) {
        var text = document.querySelector("#" + id).textContent;
        var likes = parseInt(text, 10);
        likes = likes + 1;
        document.querySelector("#" + id).textContent = likes;
        alert("Ninja was liked");
    } else {
        alert("Ninja was already liked");
    }

}