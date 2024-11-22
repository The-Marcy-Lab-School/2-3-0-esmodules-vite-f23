// Importing a "default export" (a single value)
const posts = require('./posts.js')

// Importing "named exports" (multiple values)
const { add, isEven } = require('./math-utils.js');

console.log(posts);
console.log(add(5, 6));
console.log(isEven(5));