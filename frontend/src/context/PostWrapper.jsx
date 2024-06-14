import { createContext, useContext, useEffect, useState } from 'react';
import postService from '../services/posts';
import { AuthData } from '../auth/AuthWrapper';

const PostContext = createContext();

export const PostData = () => useContext(PostContext);

export const PostWrapper = ({ children }) => {
  const { user = {} } = AuthData() || {};
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

  const fetchPosts = () => {
    try {
      postService.getAll().then((posts) =>
        setAllPosts(
          posts.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      fetchPosts();
    }
    setRender(false);
  }, [user, render]);

  return (
    <PostContext.Provider value={{ allPosts, addPosts, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
