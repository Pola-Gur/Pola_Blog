import { usePosts } from './hooks/usePosts';

const PostsPage = () => {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;
        //draft, need connection to DB, API...
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
