function pizzaOven(crust, sauce, cheese, toppings) {

    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    var myRandomPizza = [];
    var ingredientArray = [["deep dish", "hand tossed", "thin crust", "cauliflower crust"], 
                          ["traditional", "marinara", "pesto sauce", "alfredo sauce"],
                          ["mozzarella cheese", "feta cheese", "goat cheese", "blue cheese"],
                          ["pepperoni", "sausage", "mushrooms", "olives", "onions"]];
    
    for (const eachItem of ingredientArray) {
        var randInt = (Math.floor(Math.random() * eachItem.length));
        myRandomPizza.push(eachItem[randInt]);
    }
    return myRandomPizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "marinara", "mozzarella", ["pepperoni", "olives", "onions"]);
var pizza4 = pizzaOven("cauliflower crust", "pesto sauce", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var pizza5 = randomPizza();

console.log(pizza1, pizza2, pizza3, pizza4, pizza5);
