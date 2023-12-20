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
  const handleAddPosts = (newObject) => {
    postService.create(newObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSociableappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      postService.setToken(user.token);
    }
  }, []);
  if (user === null) {
    return <Login setUser={setUser} />;
  }
  const sortPost = posts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  return (
    <>
      <Header name={user.name} />
      <main className="w-full">
        <Sidebar setUser={setUser} />
        <div className="lg:w-[70%] mx-auto">
          <CreatePost addNewPost={handleAddPosts} />
          {sortPost.map((post) => {
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
