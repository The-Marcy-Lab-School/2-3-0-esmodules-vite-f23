const add = (a, b) => a + b;

const isEven = (num) => {
  const remainder = num % 2;
  return remainder === 0;
}

// Exporting multiple values inside an object
module.exports = { add, isEven };