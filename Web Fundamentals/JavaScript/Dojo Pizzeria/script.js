function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var twoToppingPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var threeToppingPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
var hawaiianPizza = pizzaOven("thin", "marinara", ["mozzarella"], ["canadian bacon", "pineapple"]);
var risingPizza = pizzaOven("rising", "marinara", ["mozzarella", "extra cheese"], ["pepperoni"]);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin",
    "rising"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "alfredo"
];

var cheeses = [
    "mozzarella",
    "parmesan",
    "feta",
    "extra cheese" // double the first choice of cheese
];

var toppings = [
    "pepperoni",
    "sausage",
    "canadian bacon",
    "pineapple",
    "mushroom",
    "olives",
    "onions"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (let index = 0; index < randomRange(5, 1); index++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for (let index = 0; index < randomRange(5, 0); index++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());