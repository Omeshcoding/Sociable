import { createContext, useContext, useEffect, useState } from 'react';
import postService from '../services/posts';

const PostContext = createContext();

export const PostData = () => useContext(PostContext);

export const PostWrapper = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);

  const [render, setRender] = useState(false);
  const addPosts = async (newObject) => {
    try {
      const returnedPost = await postService.create(newObject);
      setAllPosts((prevPost) => [...prevPost, returnedPost]);
      setRender(true);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  const removePost = (id) => {
    const newPost = allPosts.filter((post) => post.id !== id);

    postService.deletePost(id).then(() => {
      return setAllPosts(newPost);
    });
    setRender(true);
  };

  useEffect(() => {
    postService.getAll().then((posts) => setAllPosts(posts));
    setRender(false);
  }, [render]);

  return (
    <PostContext.Provider value={{ allPosts, addPosts, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
