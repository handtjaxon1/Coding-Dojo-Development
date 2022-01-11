function submitForm() {
    console.log("Hello world")
    document.getElementById("increment-submit").submit();
}

document.getElementById("increment-submit").addEventListener("click", function(){ submitForm(); })