console.log("I'm ready!");

// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Jason";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Chrome";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

longer = "";
if (hacker1.length > hacker2.length) {
  longer = `The driver has the longest name, it has ${hacker1.length} characters.`;
} else if (hacker1.length < hacker2.length) {
  longer = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
} else {
  longer = `Wow, you both have equally long names, ${hacker1.length} characters.`;
}

console.log(longer);

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker2.split("").reverse().join(""));

//3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let lexi = "";

if (hacker1 > hacker2) {
  lexi = "Yo, the navigator goes first definitely.";
} else if (hacker2 > hacker1) {
  lexi = "The driver's name goes first.";
} else {
  lexi = "What?! You both have the same name?";
}

console.log(lexi);

//Bonus Time!

// Bonus 1:
//Go to lorem ipsum generator and:

//Generate 3 paragraphs. Store the text in a variable type of string.
let lor = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lectus nunc, tempor eget lorem nec, venenatis vestibulum turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae viverra libero. Vivamus feugiat pharetra tortor, in facilisis leo cursus non. Donec varius purus odio, a pulvinar lectus semper vulputate. Sed ornare id metus ut dictum. Suspendisse enim libero, dictum tincidunt libero sed, bibendum scelerisque mauris. Suspendisse porta leo a imperdiet euismod. Duis mollis nisl nec justo maximus scelerisque. 
Proin convallis est vel nibh eleifend, ut fermentum massa lobortis. Quisque nec nisl maximus nisi convallis vestibulum. Vivamus ut dui elementum, viverra mi sed, eleifend odio. Mauris dignissim, dui vel scelerisque tempus, magna velit luctus diam, vel suscipit purus lorem et ligula. Phasellus velit ligula, interdum eu odio sodales, convallis hendrerit dolor. Duis ex lacus, vulputate et est in, feugiat porta ante. Nulla condimentum sit amet risus et pellentesque. Suspendisse at enim a urna sodales ullamcorper. Nam vel odio augue. Fusce sed egestas mi. In ante orci, eleifend at egestas ut, gravida a orci. Vivamus hendrerit scelerisque sem. Ut consequat tempus commodo. Nulla eget felis sit amet mauris elementum vestibulum. Nullam molestie arcu massa, in vehicula ante scelerisque sit amet. 
Nunc varius nisl in lacus molestie, in imperdiet risus consequat. Aenean accumsan eu magna sollicitudin laoreet. Aenean nec magna eget nibh elementum imperdiet sit amet in nunc. Mauris dolor dolor, interdum dictum odio et, maximus venenatis nunc. Integer cursus lacus diam, eget lobortis massa viverra nec. Maecenas varius leo ac felis pulvinar placerat. Nulla in cursus dolor. Nulla pretium orci quis augue tristique, id scelerisque eros tincidunt. Nulla elit diam, mollis porttitor ultricies a, aliquet vel metus. In luctus, nisi et malesuada venenatis, est erat fermentum justo, nec rutrum libero purus sed sem. Sed commodo tortor convallis nibh auctor lacinia. Nullam non purus at odio maximus elementum. Phasellus pulvinar odio libero, et maximus diam euismod euismod.`;

//Make your program count the number of words in the string.
console.log(lor.split(" ").length);

//Make your program count the number of times the Latin word et appears.
console.log([...lor.matchAll("et")].length);

//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value.
//Write a code that will check if the value we assigned to this variable is a Palindrome.
//Here are some examples of palindromes:

const pals = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];

console.log(pals[0].toUpperCase().replace(/[^a-zA-Z]/g,""))


const isPalindromo = (str) =>
  str.toUpperCase().replace(/[^a-zA-Z]/g,"") == str.toUpperCase().split("").reverse().join("").replace(/[^a-zA-Z]/g, "")
    ? true
    : false;

for (let i = 0; i < pals.length; i++) {
  console.log(isPalindromo(pals[i]));
}
