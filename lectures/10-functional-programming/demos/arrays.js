'use strict';

const meals = [
    { drink: 'water', entree: 'spaghetti', dessert: 'sugar cookie' },
    { drink: 'coke', entree: 'spinach salad', dessert: 'watermelon' },
    { drink: 'coke', entree: 'grilled cheese', dessert: 'ice cream' },
    { drink: 'milk', entree: 'pancakes', dessert: 'pancakes' },
]

/*                      .forEach */
const drinks = [];
meals.forEach( meal => {
    drinks.push( meal.drink );
});

console.log( '---------------- drinks collected from forEach ------------------------');
console.log( drinks );
console.log( meals );

/*                      .map */
const desserts = meals.map( meal => meal.dessert );

// console.log( '---------------- desserts collected from map ------------------------');
console.log( desserts );
console.log( meals );


/*                      .filter */
const sodaMeals = meals.filter( meal => meal.drink === 'coke' );
console.log( '---------------- meals with coke ------------------------');
console.log( sodaMeals );
console.log( meals );



/*                      .reduce */
// `.reduce()` => returns a new value; defaulting to integer values, but can also be a new array of values
const arr = [34, 55, 3, 23, 12, 7, 99];

let sumArray = arr.reduce( ( acc, next ) => acc + next );
let sumArrayPlusOne = arr.reduce( (acc, next) => acc + next, 1 );

console.log('---------------- sumArray and sumArryPlusOne ------------------------');
console.log( sumArray ); // => returns the total sum of the array, 233 (default accumulator is `0`)
console.log( sumArrayPlusOne ); // => returns the total sum of the array from the starting value, 234 (accumulator is `1`)




