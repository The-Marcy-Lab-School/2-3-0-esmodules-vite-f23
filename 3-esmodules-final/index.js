// Use curly braces to import a "named export"
import { renderPosts } from './dom-helpers.js'

console.log(posts);

const main = () => {
  document.querySelector('h1').textContent = 'Coding is the best';
  renderPosts();
}

// We don't need the event listener anymore. Modules automatically wait for the content to load!
main();