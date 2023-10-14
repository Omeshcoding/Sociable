import { CreatePost } from '../Components';
import Header from '../Components/Header';
import Post from '../Components/Post';
import HanumanJi from '../assets/Lord-Hanuman.jpg';

const Profile = () => {
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
        <Post />
      </div>
    </article>
  );
};

export default Profile;
