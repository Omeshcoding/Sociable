import { useState, useEffect } from 'react';
import { CreatePost } from '../Components';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import Login from './Login';
const Feed = ({ user, setUser }) => {
  const [posts, setPosts] = useState([]);

  const handleAddPosts = (newObject) => {
    postService.create(newObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
  };

  useEffect(() => {
    postService.setToken(user?.token);
  }, [user]);
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
      <main className="flex flex-col">
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
