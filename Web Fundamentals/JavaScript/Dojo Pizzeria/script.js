function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var twoToppingPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var grossPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
var hawaiianPizza = pizzaOven("thin crust", "marinara", ["mozzarella"], ["canadian bacon", "pineapple"]);
var risingPizza = pizzaOven("rising", "marinara", ["mozzarella", "extra cheese"], ["pepperoni"]);