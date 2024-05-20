import names from './data.js'
console.log('printing names from dom-helpers.js', names)

// "helper" function
export const modifyHeader = (headerText) => {
  document.querySelector('h1').textContent = headerText
}

export const addNameToBody = (name) => {
  const newP = document.createElement('p');
  newP.textContent = name;
  document.body.append(newP);
}