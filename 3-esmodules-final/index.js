// Use curly braces to import a "named export"
import { renderPosts, updateHeading } from './dom-helpers.js'

import posts from './posts.js';

const main = () => {
  const numPosts = Object.keys(posts).length;
  updateHeading(`Check out my ${numPosts} posts!`);
  renderPosts();
}

// We don't need the event listener anymore. Modules automatically wait for the content to load!
main();