import { BiNews, BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = ({ setUser }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('loggedSociableappUser');
    setUser(null);
  };

  return (
    <nav className="flex flex-col lg:h-[100%] w-[100%] lg:w-[20%] px-3 md:px-10 capitalize justify-center fixed bottom-0 lg:top-0 shadow-xl py-4 gap-10 md:gap-16 lg:gap-20 z-10 text-md md:text-xl bg-orange-200">
      <div className="flex sticky buttom-0 lg:flex-col gap-10 sm:gap-28  mx-auto">
        <Link to="/feed" className="flex align-center">
          <span className="mr-2 my-auto">
            <BiNews />
          </span>
          my Feed
        </Link>

        <Link to="/profile" className="flex">
          <span className=" mr-2 my-auto">
            <BsFillPersonFill />
          </span>{' '}
          profile
        </Link>
        <Link to="/feed" className="flex" onClick={handleLogout}>
          <span className=" mr-2 my-auto">
            <BiLogIn />
          </span>{' '}
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
