export const fetchPosts = async () => {
    const response = await fetch('/api/posts'); // CHECK AND CHANGE
    const data = await response.json();
    return data;
  };
  
  export const createPost = async (post) => {
    const response = await fetch('/api/posts', { // CHECK AND CHANGE
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
  };
  