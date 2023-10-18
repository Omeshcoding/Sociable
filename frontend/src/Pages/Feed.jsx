import { useState, useEffect } from 'react';
import { Sidebar, CreatePost } from '../Components';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import Login from './Login';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    postService.getAll().then((posts) => setPosts(posts));
  }, []);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSociableappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  if (user === null) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header />
      <main className="w-full">
        <Sidebar setUser={setUser} />
        <div>
          {/* <CreatePost /> */}
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Posts post={post} user={post.user} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Feed;
