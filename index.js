// Js conditionals, if, if else, else, switch, ternary operator

// if statement - if a condition is true, then do something
const age = 25;
let isAdult =;

if (age >= 18) {
  isAdult = true;
}
console.log(isAdult);

// if else statement - if a condition is true, then do something, else do something else

const minAge = 30;
let isGrownUp =;

if (age >= minAge) {
  isGrownUp = true;
} else {
  isGrownUp = false;
}
console.log(isGrownUp);


// if, if else, else statement - if a condition is true, then do something, else if another condition is true, do something else, else do something else
const maxAge = 50;
const minAge = 30;
let isOld =;
if (age >= maxAge) {
  isOld = true;
} else if (age >= minAge) {
  isOld = false;
} else {
  isOld = "Not close to old";
}
console.log(isOld);

// ternary operator - if a condition is true, then do something, else do something else

const minAge = 30;
let isGrownUp =;
const isGrownUp = age >= minAge ? true : false;
console.log(isGrownUp);


// Nested if statement - if a condition is true, then do something, else if another condition is true, do something else, else do something else
const age = 25;

let isAdult, canWork, canVote;
if (age >= 18) {
  isAdult = true;
  if (age >= 21) {
    canVote = true;
    if (age >= 25) {
      canWork = true;
    } else {
      canWork = false;
    }
  } else {
    canVote = false;
  }
}
console.log(isAdult, canVote, canWork);



const age = 17;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

canWork;




// switch statement - if a condition is true, then do something, else if another condition is true, do something else, else do something else
// consider:

const order = 'cheeseburger';

let ingredients;
if (order === 'cheeseburger') {
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
} else if (order === 'hamburger') {
    ingredients = 'bun, burger, lettuce, tomato, onion';
} else if (order === 'malted') {
    ingredients = 'milk, ice cream, malted milk powder';
} else {
    console.log("Sorry, that's not on the menu right now.");
}


// simplify using switch statement:
const order = 'cheeseburger';
let ingredients;
switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
}


// switch statement with multiple cases:2

const allowedAge = 18;

let canDrink;
switch (age) {
    case 14:
        canDrink = false;
        break;
    case 15:
        canDrink = false;
        break;
    case 16:
        canDrink = false;
        break;
    case 18:
        canDrink = true;
        break;
    case 19:
        canDrink = true;
        break;
    case 20:
        canDrink = true;
        break
    case 21:
        canDrink = true;
        break;
    default:
        canDrink = false;
}
console.log(canDrink);


const age = 25;

let isAdult, canWork, canEnlist, canDrink;

switch (true) {
    case age >= 21:
        canDrink = true;
    case age >= 18:
        isAdult = true;
        canEnlist = true;
    case age >= 16:
        canWork = true;
}