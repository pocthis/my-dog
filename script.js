// Blog posts data (could be loaded from a JSON file, but kept here for simplicity)
const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "2024-06-01",
    summary: "This is the first post on my new blog!",
    content: `<p>Welcome to my blog. This is my first post. Stay tuned for more updates!</p>`
  },
  {
    id: 2,
    title: "Another Day, Another Post",
    date: "2024-06-02",
    summary: "Here's another post to show how things work.",
    content: `<p>This is another post. You can add as many posts as you like by editing the <code>posts</code> array in <code>script.js</code>.</p>`
  }
];

// Utility to get query params
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Render posts list on index.html
function renderPostsList() {
  const list = document.getElementById('posts-list');
  if (!list) return;
  list.innerHTML = '';
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <a class="post-title" href="post.html?id=${post.id}">${post.title}</a>
      <span class="post-date">${post.date}</span>
      <p>${post.summary}</p>
    `;
    list.appendChild(card);
  });
}

// Render single post on post.html
function renderSinglePost() {
  const container = document.getElementById('post-content');
  if (!container) return;
  const id = getQueryParam('id');
  const post = posts.find(p => p.id == id);
  if (!post) {
    container.innerHTML = '<p>Post not found.</p>';
    return;
  }
  container.innerHTML = `
    <h2>${post.title}</h2>
    <span class="post-date">${post.date}</span>
    <div>${post.content}</div>
  `;
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderPostsList();
    renderSinglePost();
  });
} else {
  renderPostsList();
  renderSinglePost();
}
