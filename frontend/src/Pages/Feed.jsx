import { useState, useEffect } from 'react';
import { Sidebar, CreatePost } from '../Components';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import Login from './Login';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

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
  useEffect(() => {
    postService.getAll().then((posts) => setPosts(posts));
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
      <main className="flex flex-col">
        <Sidebar setUser={setUser} />
        <div className=" flex flex-col items-center w-[100%] lg:w-[80%] ml-auto ">
          <div className="mx-auto">
            <CreatePost addNewPost={handleAddPosts} />
            {sortPost.map((post) => {
              return (
                <div key={post.id}>
                  <Posts post={post} user={post.user} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
