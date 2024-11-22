// TODO: Import renderPosts and updateHeading from dom-helpers.js
// TODO: Import posts from posts.js

const main = () => {
  const numPosts = Object.keys(posts).length;
  updateHeading(`Check out my ${numPosts} posts!`);

  renderPosts();
}

// TODO: Remove this event listener
document.addEventListener('DOMContentLoaded', main);

