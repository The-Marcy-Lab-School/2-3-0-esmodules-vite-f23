// TODO: Import the posts here

// TODO: Add the `export` keyword to these functions to make them each a "named export"
const updateHeading = (msg) => {
  const h1 = document.querySelector('h1');
  h1.textContent = msg;
}

const renderPosts = () => {
  const postsContainer = document.querySelector('#posts-container');

  Object.values(posts).forEach((post) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const caption = document.createElement('p');

    li.id = post.id;
    img.src = post.src;
    img.alt = post.caption;
    caption.textContent = post.caption;

    li.append(img, caption);
    postsContainer.append(li);
  });
}