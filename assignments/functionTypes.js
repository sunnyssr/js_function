// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

// Function Start

// Function Declaration
function addOne(n) {
  return ++n;
}

// Function Expression
let addOne1 = function(n) {
  return ++n;
}

// Arrow Function
let addOne2 = n => ++n;

// Arrow Function with Curly Bracket
let addOne3 = n => {
  return ++n;
}

// Function Invocation
addOne(100); // 101
addOne1(11); // 12
addOne2(10); // 11
addOne3(1); // 2

// Function End

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

// Function Start

// Function Declaration
function subtractOne(n) {
  return --n;
}

// Function Expression
let subtractOne1 = function(n) {
  return --n;
}

// Arrow Function
let subtractOne2 = n => --n;

// Arrow Function with Curly Bracket
let subtractOne3 = n => {
  return --n;
}

// Function Invocation
subtractOne(10); // 9
subtractOne1(110); // 109
subtractOne2(100); // 99
subtractOne3(1110); // 1109

// Function End
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

// Function Start

// Function Declaration
function add(x, y) {
  return (x + y);
}

// Function Expression
let add1 = function(x, y) {
  return (x + y);
}

// Arrow Function
let add2 = (x, y) => (x + y);

// Arrow Function with Curly Bracket
let add3 = (x, y) => {
  return (x + y);
}

// Function Invocation
add(10, 20); // 30
add1(110, 110); // 220
add2(100, 500); // 600
add3(1110, 660); // 1770

// Function End

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

// Function Start

// Function Declaration
function subtract(x, y) {
  return (x - y);
}

// Function Expression
let subtract1 = function(x, y) {
  return (x - y);
}

// Arrow Function
let subtract2 = (x, y) => (x - y);

// Arrow Function with Curly Bracket
let subtract3 = (x, y) => {
  return (x - y);
}

// Function Invocation
subtract(100, 20); // 80
subtract1(150, 110); // 40
subtract2(1000, 500); // 500
subtract3(1110, 660); // 450

// Function End

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

// Function Start

// Function Declaration
function multiply(x, y) {
  return (x * y);
}

// Function Expression
let multiply1 = function(x, y) {
  return (x * y);
}

// Arrow Function
let multiply2 = (x, y) => (x * y);

// Arrow Function with Curly Bracket
let multiply3 = (x, y) => {
  return (x * y);
}

// Function Invocation
multiply(100, 20); // 2000
multiply1(150, 110); // 16500
multiply2(1000, 500); // 500000
multiply3(1110, 660); // 732600

// Function End

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

// Function Start

// Function Declaration
function divide(x, y) {
  return (x / y);
}

// Function Expression
let divide1 = function(x, y) {
  return (x / y);
}

// Arrow Function
let divide2 = (x, y) => (x / y);

// Arrow Function with Curly Bracket
let divide3 = (x, y) => {
  return (x / y);
}

// Function Invocation
divide(100, 20); // 5
divide1(150, 50); // 3
divide2(1000, 500); // 2
divide3(11100, 555); // 20

// Function End

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

// Function Start

// Function Declaration
function squared(x) {
  return (x * x);
}

// Function Expression
let squared1 = function(x) {
  return (x * x);
}

// Arrow Function
let squared2 = x => (x * x);

// Arrow Function with Curly Bracket
let squared3 = x => {
  return (x * x);
}

// Function Invocation
squared(100); // 10000
squared1(11); // 121
squared2(10); // 100
squared3(111); // 12321

// Function End

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

// Function Start

// Function Declaration
function performMath(operation, x, y) {
  switch(operation){
    case "add" : console.log(x+" + "+y+" = "+(x + y));
                 return x + y;
                 break;
    case "subtract" : console.log(x+" - "+y+" = "+(x - y));
                      return x - y;
                      break;    
    case "multiply" : console.log(x+" * "+y+" = "+(x * y));
                      return x * y;
                      break;
    case "divide" : console.log(x+" / "+y+" = "+(x / y));
                    return x / y;
                    break;   
    default : return 0;
              break;
  }
}

// Function Expression
let performMath1 = function(operation, x, y) {
  switch(operation){
    case "add" : console.log(x+" + "+y+" = "+(x + y));
                 return x + y;
                 break;
    case "subtract" : console.log(x+" - "+y+" = "+(x - y));
                      return x - y;
                      break;    
    case "multiply" : console.log(x+" * "+y+" = "+(x * y));
                      return x * y;
                      break;
    case "divide" : console.log(x+" / "+y+" = "+(x / y));
                    return x / y;
                    break;   
    default : return 0;
              break;
  }
}

// Arrow Function
let performMath2 = (operation, x, y) => (((operation == "add")&&(console.log(x+" + "+y+" = "+(x + y))||(x+y)))||((operation == "subtract")&&(console.log(x+" - "+y+" = "+(x - y))||(x-y)))||((operation=="multiply")&&(console.log(x+" * "+y+" = "+(x * y))||(x*y)))||((operation=="divide")&&(console.log(x+" / "+y+" = "+(x - y))||(x/y)))||0);

// Arrow Function with Curly Bracket
let performMath3 = (operation, x, y) => {
  switch(operation){
    case "add" : console.log(x+" + "+y+" = "+(x + y));
                 return x + y;
                 break;
    case "subtract" : console.log(x+" - "+y+" = "+(x - y));
                      return x - y;
                      break;    
    case "multiply" : console.log(x+" * "+y+" = "+(x * y));
                      return x * y;
                      break;
    case "divide" : console.log(x+" / "+y+" = "+(x / y));
                    return x / y;
                    break;   
    default : return 0;
              break;
  }
}

// Function Invocation
performMath("add", 3, 40) // 40
performMath1("divide", 9920, 124) // 80
performMath2("subtract", 256, 124) // 132
performMath3("multiply" , 13, 15) // 195

// Function End
 
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

// Function Start

// Function Declaration
function isGreater(a, b) {
  return (a > b);
}

// Function Expression
let isGreater1 = function(a, b) {
  return (a > b);
}

// Arrow Function
let isGreater2 = (a, b) => (a > b);

// Arrow Function with Curly Bracket
let isGreater3 = (a, b) => {
  return (a > b);
}

// Function Invocation
isGreater(100, 20); // true
isGreater1(11, 22); // false
isGreater2(10, 9); // true
isGreater3(111, 112); // false

// Function End

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

// Function Start

// Function Declaration
function isSmaller(a, b) {
  return (a < b);
}

// Function Expression
let isSmaller1 = function(a, b) {
  return (a < b);
}

// Arrow Function
let isSmaller2 = (a, b) => (a < b);

// Arrow Function with Curly Bracket
let isSmaller3 = (a, b) => {
  return (a < b);
}

// Function Invocation
isSmaller(100, 20); // false
isSmaller1(11, 22); // true
isSmaller2(10, 9); // false
isSmaller3(111, 112); // true

// Function End

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

// Function Start

// Function Declaration
function isEqual(a, b) {
  return (a === b);
}

// Function Expression
let isEqual1 = function(a, b) {
  return (a === b);
}

// Arrow Function
let isEqual2 = (a, b) => (a === b);

// Arrow Function with Curly Bracket
let isEqual3 = (a, b) => {
  return (a === b);
}

// Function Invocation
isEqual(100, 100); // true
isEqual1(1101, 2202); // false
isEqual2(101111, 101111); // true
isEqual3(111, 112); // false

// Function End

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

// Function Start

// Function Declaration
function getSmaller(x, y) {
  return (x < y) ? x : y;
}

// Function Expression
let getSmaller1 = function(x, y) {
  return (x < y) ? x : y;
}

// Arrow Function
let getSmaller2 = (x, y) => ((x < y) ? x : y);

// Arrow Function with Curly Bracket
let getSmaller3 = (x, y) => {
  return (x < y) ? x : y;
}

// Function Invocation
getSmaller(100, 150); // 100
getSmaller1(1101, 1102); // 1101
getSmaller2(1101, 1100); // 1100
getSmaller3(900, 500); // 500

// Function End

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

// Function Start

// Function Declaration
function getLarger(x, y) {
  return (x > y) ? x : y;
}

// Function Expression
let getLarger1 = function(x, y) {
  return (x > y) ? x : y;
}

// Arrow Function
let getLarger2 = (x, y) => ((x > y) ? x : y);

// Arrow Function with Curly Bracket
let getLarger3 = (x, y) => {
  return (x > y) ? x : y;
}

// Function Invocation
getLarger(100, 150); // 150
getLarger1(1101, 1102); // 1102
getLarger2(1101, 1100); // 1101
getLarger3(900, 500); // 900

// Function End

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

// Function Start

// Function Declaration
function isEven(n) {
  return (!(n%2));
}

// Function Expression
let isEven1 = function(n) {
  return (!(n%2));
}

// Arrow Function
let isEven2 = (n) => (!(n%2));

// Arrow Function with Curly Bracket
let isEven3 = (n) => {
  return (!(n%2));
}

// Function Invocation
isEven(100); // true
isEven1(1101); // false
isEven2(101110); // true
isEven3(111); // false

// Function End

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

// Function Start

// Function Declaration
function isOdd(n) {
  return Boolean(n%2);
}

// Function Expression
let isOdd1 = function(n) {
  return Boolean(n%2);
}

// Arrow Function
let isOdd2 = (n) => Boolean(n%2);

// Arrow Function with Curly Bracket
let isOdd3 = (n) => {
  return Boolean(n%2);
}

// Function Invocation
isOdd(100); // false
isOdd1(1101); // true
isOdd2(101110); // false
isOdd3(111); // true

// Function End

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

// Function Start

// Function Declaration
function getGrade(score, total) {
  switch(true){
    case ((score/total)>=0.9) : return "A";
                                break;
    case ((score/total)>=0.8) : return "B";
                                break;    
    case ((score/total)>=0.7) : return "C";
                                break;
    case ((score/total)>=0.6) : return "D";
                                break;   
                      default : return "F";
                                break;
  }
}

// Function Expression
let getGrade1 = function(score, total) {
  switch(true){
    case ((score/total)>=0.9) : return "A";
                                break;
    case ((score/total)>=0.8) : return "B";
                                break;    
    case ((score/total)>=0.7) : return "C";
                                break;
    case ((score/total)>=0.6) : return "D";
                                break;   
                      default : return "F";
                                break;
  }
}

// Arrow Function
let getGrade2 = (score, total) => (((score/total>=0.9)&&("A"))||((score/total>=0.8)&&("B"))||((score/total>=0.7)&&("C"))||((score/total>=0.6)&&("D"))||"F");

// Arrow Function with Curly Bracket
let getGrade3 = (score, total) => {
  switch(true){
    case ((score/total)>=0.9) : return "A";
                                break;
    case ((score/total)>=0.8) : return "B";
                                break;    
    case ((score/total)>=0.7) : return "C";
                                break;
    case ((score/total)>=0.6) : return "D";
                                break;   
                      default : return "F";
                                break;
  }
}

// Function Invocation
getGrade(20, 30); // "D"
getGrade1(40, 50); // "B"
getGrade2(90, 100); // "A"
getGrade3(85, 110); // "C"

// Function End

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

// Function Start

// Function Declaration
function addStrings(word1, word2) {
  return (word1+" "+word2);
}

// Function Expression
let addStrings1 = function(word1, word2) {
  return (word1+" "+word2);
}

// Arrow Function
let addStrings2 = (word1, word2) => (word1+" "+word2);

// Arrow Function with Curly Bracket
let addStrings3 = (word1, word2) => {
  return (word1+" "+word2);
}

// Function Invocation
addStrings("Hello", "World"); // "Hello World"
addStrings1("Hey", "there!"); // "Hey there!"
addStrings2("See", "you"); // "See you"
addStrings3("It's", "Awesome"); // "It's Awesome"

// Function End