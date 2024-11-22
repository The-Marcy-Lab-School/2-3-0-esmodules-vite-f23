// when importing a default export, we can choose the variable name of the imported value
import posts from './posts.js'

// We export these as "named exports" because it exports multiple values
// A "named export" is defined in browser code using the `export` keyword in front of any variable declaration or value.
export const updateHeading = (msg) => {
  const h1 = document.querySelector('h1');
  h1.textContent = msg;
}

export const renderPosts = () => {
  const postsContainer = document.querySelector('#posts-container');

  Object.values(posts).forEach((post) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const caption = document.createElement('p');

    li.id = post.uuid;
    img.src = post.src;
    img.alt = post.caption;
    caption.textContent = post.caption;

    li.append(img, caption);
    postsContainer.append(li);
  });
}