function addLike(id) {
    var text = document.querySelector("#" + id).textContent;
    var likes = parseInt(text, 10);
    likes = likes + 1;
    document.querySelector("#" + id).textContent = likes;
    console.log("Clicked");
}