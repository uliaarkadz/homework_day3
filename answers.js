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

//With the following multi-dimensional array
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// Remove Eggbert (hint look at the slice/splice method(s))

let indexEgg = whereIsWaldo.indexOf("Eggbert");
whereIsWaldo.splice(indexEgg, 1);
console.log(whereIsWaldo);

// Change "Neff" to "No One"

whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

// Access and console.log "Waldo"

let arr1 = whereIsWaldo.slice(2);
console.log(arr1[0][1][1]);

//******************************
//  Excited Kitten
//******************************

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
let kittenTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 0; i < 20; i++) {
  let ranNumber = Math.ceil(Math.random() * kittenTalk.length);
  if (i % 2 == 0) {
    console.log(kittenTalk[ranNumber - 1], ranNumber);
  } else console.log("Love me, pet me! HSSSSSS!");
}

//******************************
//  Find the Median
//******************************

// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

//sort array
nums.sort();

// find index of the number in the middle
let midIndex = Math.floor(nums.length / 2);

//oitput medium
console.log("Median number: " + nums[midIndex]);

// Expected output:
// => 15

//******************************
// Fibonacci
//******************************

// Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!
// Fibonacci is just another sequence of numbers.
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be

// Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let fibonacci = [1, 1];
let fibonacciSum = 0;
for (let i = 0; i < 40; i++) {
  let next = fibonacci[i] + fibonacci[i + 1];

  fibonacci.push(next);

  if (next % 2 == 0) {
    fibonacciSum += next;
  }
}
console.log("Fibonacci", fibonacci);
console.log("Fibonacci even numbers sum is: ", fibonacciSum);

//******************************
// Checkerboard
//******************************

// Set a checkerboard size to a variable

// const boardSize = 8;
// Now, using what you know about control flow, build a checkerboard
const boardSize = 8;

for (let i = 1; i <= boardSize; i++) {
  let str = "";
  for (let j = 1; j <= boardSize; j++) {
    (j + i) % 2 === 0 ? (str += "#") : (str += " ");
  }
  console.log(str);
}

//******************************
// TwoDArray (afternoon lab)
//******************************
// Wildly Ravenous For Even More
// Spiral Path
// Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.

// For example, if

let array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

function matrix(matrix) {
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const result = [];
  const size = matrix.length * matrix[0].length;

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
}

console.log(matrix(array));

//******************************
// Return of the Closets
//******************************

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
//Alien Attire
//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.splice(0, 1).toString();
thomsCloset[2].push(kristynsShoe);
console.log("KristynsShoe", kristynsShoe);
console.log("Thom's closet", thomsCloset);

//Dress Us Up
//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
console.log(
  `Kristyn is wearing a ${kristynsCloset[0]}, ${kristynsCloset[2]} and ${kristynsCloset[3]}!`
);
console.log(
  `Kristyn is wearing a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`
);
