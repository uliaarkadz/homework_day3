//******************************
// Easy Going
//******************************
//Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//******************************
// Get Even
//******************************
//Write a for loop that will log only the even numbers in 0 through 200.

for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

//******************************
// Fizz Buzz
//******************************
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 == 0) {
    console.log("Fizz", i);
  } else if (i % 5 == 0) {
    console.log("Buzz", i);
  }
}

// //******************************
// Wild Wild Life
//******************************

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

//using index replacement method
plantee[2] = 5001;
console.log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

//using splice method
wolfy.splice(3, 1, "Gotham City");
console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"

//using push method - adds element at the end
const dart1 = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
dart1.push("Hawkins");
console.log(dart1);

//using splice method
dart.splice(4, 0, "Hawkins");
console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

//using shift/unshift methods
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);

//******************************
// Yell at the Ninja Turtles
//******************************
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

for (let turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}

//******************************
// Methods, Revisited
//******************************

// Here is a list of favMovies:

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
// Console log: the index of Titanic

console.log(favMovies.indexOf("Titanic"));

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

favMovies.sort();
console.log(favMovies);

// Use the method pop

favMovies.pop();
console.log(favMovies);

// push "Guardians of the Galaxy"

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

// Reverse the array

const reverseArr = favMovies.reverse();
console.log(reverseArr);

// Use the shift method

favMovies.shift();
console.log(favMovies);

// unshift - what does it return?

favMovies.unshift("Ice Age");
console.log(favMovies);

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
var index = favMovies.indexOf("Django Unchained");
favMovies.splice(index, 1, "Avatar");
console.log(favMovies);

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

function arrayMiddle(arrLen) {
  if (arrLen % 2 == 0) {
    return arrLen / 2;
  } else {
    return Math.ceil(arrLen / 2);
  }
}
let middle = arrayMiddle(favMovies.length);

// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
let removed = favMovies.splice(middle, favMovies.length - middle);

console.log(removed);

// console.log your final results
console.log(favMovies);

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

console.log(favMovies.indexOf("Fast and Furious"));

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

//******************************
// Where is Waldo
//******************************

//******************************
//  Excited Kitten
//******************************

//******************************
//  Find the Median
//******************************
