import { useEffect, useState } from 'react';
import { CreatePost } from '../Components';
import Header from '../Components/Header';
import Post from '../Components/Post';
import HanumanJi from '../assets/Lord-Hanuman.jpg';
import userService from '../services/posts';

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    userService.getUser().then((res) => setUserData(res));
    const loggedUserJSON = window.localStorage.getItem('loggedSociableappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setLoggedUser(user);
    }
  }, []);
  const filterPost = userData.find((post) => post.email === loggedUser.email);
  console.log(loggedUser);
  return (
    <article>
      <Header />
      <div className="relative flex items-center flex-col my-20">
        <div className="shadow-xl bg-green-400 w-full h-56"></div>
        <div className=" absolute bottom-[-4rem] text-center">
          <img
            src={HanumanJi}
            alt=""
            className="w-24 shadow-xl rounded-full h-24"
          />
          <h2>Name</h2>
        </div>
      </div>
      <CreatePost />
      <div>
        {filterPost?.posts.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} user={loggedUser} />
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Profile;
