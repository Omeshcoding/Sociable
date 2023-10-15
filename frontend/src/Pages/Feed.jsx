import { useState, useEffect } from 'react';
import { Sidebar, CreatePost } from '../Components';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import postService from '../services/posts';
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((posts) => setPosts(posts));
  }, []);
  return (
    <>
      <Header />
      <main className="w-full">
        <Sidebar />
        <CreatePost />
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Posts post={post} />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Feed;
