console.log("Page loading...");

function removeCookie() {
    document.querySelector(".cookie").remove();
}

function convertTemp(tempType) {
    var temps = document.querySelectorAll(".temp > p");

    // If the temp type is unchanged after selecting an option then don't recalculate
    if (tempType === currentTempType) return;

    if (tempType.value === "celsius") {
        console.log("celsius");
        // Convert to celcius
        temps.forEach(temp => {
            var tempAsVal = parseFloat(temp.textContent);
            tempAsVal = (tempAsVal - 32) * 5 / 9;
            temp.textContent = Math.round(tempAsVal);
        });
    } else {
        console.log("fahrenheit");
        // Convert to fahrenheit
        temps.forEach(temp => {
            var tempAsVal = parseFloat(temp.textContent);
            tempAsVal = tempAsVal * 9 / 5 + 32;
            temp.textContent = Math.round(tempAsVal);
        });
    }
}

var cities = document.querySelectorAll(".nav-links a");
cities.forEach(city => {
    city.addEventListener("click", function(){ alert("Loading weather report..."); });
});

var element = document.querySelector("#tempType");
var currentTempType = element.options[element.selectedIndex].value;
console.log(currentTempType);