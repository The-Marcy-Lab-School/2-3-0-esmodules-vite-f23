console.log("hello from index.js");

const main = () => {
  const numPosts = Object.keys(posts).length;
  updateHeading(`Check out my ${numPosts} posts!`);

  renderPosts();
}

main();
// After moving the scripts to the head, add a DOMContentLoaded event listener to the document
