import { useEffect, useState } from 'react';
import { CreatePost, Sidebar } from '../Components';
import Header from '../Components/Header';
import Post from '../Components/Post';
import HanumanJi from '../assets/Lord-Hanuman.jpg';
import userService from '../services/posts';

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [post, setPost] = useState([]);
  useEffect(() => {
    userService.getUser().then((res) => setUserData(res));
    const loggedUserJSON = window.localStorage.getItem('loggedSociableappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setLoggedUser(user);
      userService.setToken(user.token);
    }
  }, []);
  useEffect(() => {
    const filterPost = userData.find((post) => post.email === loggedUser.email);
    setPost(filterPost?.posts);
  }, [userData, loggedUser]);

  const handleAddPosts = (newObject) => {
    console.log(newObject);
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
  return (
    <>
      <Header name={loggedUser?.name} />
      <div className="flex flex-col">
        <Sidebar />

        <div className=" flex flex-col items-center lg:w-[80%] ml-auto ">
          <div className="ml-0 flex justify-between items-center">
            <img
              src={HanumanJi}
              alt=""
              className="w-[100px] shadow-xl rounded-full h-[100px]"
            />
            <p className="text-center ml-4">{loggedUser?.name}</p>
          </div>
          <div className="mx-auto">
            <CreatePost addNewPost={handleAddPosts} />
            {post &&
              post.map((post) => {
                return (
                  <div key={post?.id}>
                    <Post
                      posts={post}
                      user={loggedUser}
                      removePost={removePost}
                    />
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
