/**
 * Created by Jungle on 22/09/2016.
 */
// js array practice
// 1. create an array called "food" and put your 3 favourite foods in it

var foodsYum = ['banana','mushroom','taco salad'];
var foods = [
    ['sushi', ['rice', 'seaweed', 'fish']],
    ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']],
    ['pizza', ['dough', 'cheese', 'sauce']]
];

//2. display the first item in the array

console.log(foodsYum[0]);

//3. display the food items each on a new line


for (var i = 0; i < foodsYum.length; i++){

    console.log(foodsYum[i]);

}

// 4. display this: 'Food: food1, food2, food3'

console.log('Food: ' + foodsYum);

//5. display food and ingredients below with ingredients indented with a tab



for (var k = 0; k < foods.length; k++){

    console.log(foods[k][0]); // print food name - 1st element in sub-array

    // loop through ingredient array at position one of the upper array
    for (var n = 0; n < foods[k][1].length; n++){

        console.log('\t' + foods[k][1][n]);
        // k is the current food item
        //1 is the list of ingredients
        //n is the current ingredient

    }