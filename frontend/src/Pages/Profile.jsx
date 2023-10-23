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
  return (
    <article>
      <Header />
      <div className="relative flex items-center flex-col lg:mb-40 mb-20">
        <div className="shadow-xl bg-black/10 w-full h-56"></div>
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
