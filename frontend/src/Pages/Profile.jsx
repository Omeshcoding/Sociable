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
    <article>
      <Sidebar />
      <Header name={loggedUser?.name} />
      <div className="relative flex items-center flex-col lg:mb-40 mb-20">
        <div className="shadow-xl bg-black/10 w-full h-56 z-0"></div>
        <div className=" absolute bottom-[-4rem] text-center">
          <img
            src={HanumanJi}
            alt=""
            className="w-24 shadow-xl rounded-full h-24"
          />
          <h2 className="text-lg text-gray-600 font-semibold">
            {loggedUser?.name}{' '}
          </h2>
        </div>
      </div>
      <div className="lg:w-[70%] mx-auto">
        <CreatePost addNewPost={handleAddPosts} />

        {post &&
          post.map((post) => {
            return (
              <div key={post?.id}>
                <Post post={post} user={loggedUser} removePost={removePost} />
              </div>
            );
          })}
      </div>
    </article>
  );
};

export default Profile;
