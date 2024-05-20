console.log("hello from index.js");

// named import syntax
// use this when the export uses `export const someValue...`
import { test } from './other.js'
console.log(test);

// default import syntax
// no curly braces
// we can call the import whatever we want
import anything from './other.js'
console.log(anything);


// modules are sections of code that are stored separately
// that we can reuse and add into our code for better readability
import { modifyHeader, addNameToBody } from "./dom-helpers.js";
import names from "./data.js"

// "runner" function
const main = () => {
  modifyHeader('hello nirvana')
  names.forEach(addNameToBody)
}

main();

/* 
we wanted to fix the null reference error
we added an event listener
the event that we're listening for is for the dom to load
*/