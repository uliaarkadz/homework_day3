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

//******************************
// Methods, Revisited
//******************************

//******************************
// Where is Waldo
//******************************

//******************************
//  Excited Kitten
//******************************

//******************************
//  Find the Median
//******************************
