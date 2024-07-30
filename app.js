// Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubled = nums.map(number => number * 2)
console.log(doubled)

//Exercise 2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [topping1, topping2] = pizzaToppings;
console.log(topping1, topping2)

//Exercise 3
const car = {
    make: 'Audi',
    model: 'q5',
  };
const {make, model} = car; 
console.log(make, model)

//Exercise 4
const controversialToppings = [...pizzaToppings];
console.log(controversialToppings)

//Exercise 5
const myCar = {...car}
myCar.model = 'q7'
console.log(car, myCar)

//Exercise 6
const userProfile = {propertyName : "ckremer17"}
const property = "propertyName"
console.log(userProfile[property])

//Exercise 7
//See other files

//Exercise 8
function sentence(noun = "cat", adjective = "white") {
    console.log(`The ${noun} is ${adjective}.`)
}
sentence();

//Exercise 9
const tasty = false;
console.log(tasty === true ? 'yum' : 'yuck')

//Exercise 10
// 1. SET LANGUAGE
const localLangConfig = null;
const LANG = localLangConfig || "English";

// 2. SET WEBSITE THEME
const userSavedTheme = null; 
const USER_THEME = userSavedTheme || "light"

// Exercise 11
const adventurer = {
    name: "Alice",
};

let cat = adventurer.cat?.name;
console.log(cat)