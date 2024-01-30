import { useEffect, useState } from 'react';
import { CreatePost } from '../Components';
import Post from '../Components/Post';
import HanumanJi from '../assets/Lord-Hanuman.jpg';
import userService from '../services/posts';
import { useParams } from 'react-router-dom';
import { AuthData } from '../auth/AppWrapper';

const Profile = () => {
  const [post, setPost] = useState([]);
  const { user = {} } = AuthData() || {};

  const id = useParams().id;

  useEffect(() => {
    userService
      .getAll()
      .then((posts) => setPost(posts?.filter((post) => post?.user?.id === id)));
    // userService.setToken(user?.token);
  }, [id]);

  const handleAddPosts = (newObject) => {
    userService.create(newObject).then((returnedPost) => {
      setPost(post.concat(returnedPost));
    });
  };
  const removePost = (id) => {
    const newPost = post.filter((post) => post.id !== id);

    userService.deletePost(id).then(() => {
      return setPost(newPost);
    });
  };
  console.log(post);
  return (
    <>
      <div className="flex flex-col">
        <div className=" flex flex-col items-center lg:w-[80%] lg:ml-auto ">
          <div className="ml-0 flex justify-between items-center">
            <img
              src={HanumanJi}
              alt=""
              className="w-[100px] shadow-xl rounded-full h-[100px]"
            />
            <p className="text-center ml-4">{user?.name}</p>
          </div>
          <div className="mx-auto">
            <CreatePost addNewPost={handleAddPosts} />
            {post &&
              post.map((post) => {
                return (
                  <div key={post?.id}>
                    <Post posts={post} user={user} removePost={removePost} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
