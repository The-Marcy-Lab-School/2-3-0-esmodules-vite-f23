console.log("hello from index.js");

const main = () => {
  const h1 = document.querySelector('h1')
  h1.textContent = 'Coding is the best';

  renderPosts();
}

main();
// After moving the scripts to the head, add a DOMContentLoaded event listener to the document
