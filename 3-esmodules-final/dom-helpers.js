// TODO: Import the posts here
import posts from './posts.js'

// TODO: Add named export keyword to this function
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