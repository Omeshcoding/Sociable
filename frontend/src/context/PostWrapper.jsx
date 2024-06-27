import { createContext, useContext, useEffect, useState } from 'react';
import postService from '../services/posts';
import { AuthData } from '../auth/AuthWrapper';

const PostContext = createContext();

export const PostData = () => useContext(PostContext);

export const PostWrapper = ({ children }) => {
  const { user = {} } = AuthData() || {};
  const [allPosts, setAllPosts] = useState([]);

  const [render, setRender] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  const addPosts = async (newObject) => {
    setIsSubmitting(true);
    try {
      const returnedPost = await postService.create(newObject);
      setAllPosts((prevPost) => [...prevPost, returnedPost]);
      setRender(true);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error adding post:', error);
      setNotification({
        message: 'Please add title,description and an image',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);
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
    setIsSubmitting(true);
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
      setIsSubmitting(false);
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
    <PostContext.Provider
      value={{ allPosts, addPosts, removePost, isSubmitting, notification }}
    >
      {children}
    </PostContext.Provider>
  );
};
