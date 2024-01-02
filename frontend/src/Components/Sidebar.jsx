import { BiNews, BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ setUser }) => {
  const location = useLocation();
  const handleLogout = () => {
    window.localStorage.removeItem('loggedSociableappUser');
    setUser(null);
  };

  return (
    <nav className="flex flex-col lg:h-[100%] w-[100%] lg:w-[20%] px-3 md:px-10 capitalize justify-center fixed bottom-0 lg:top-0 shadow-xl py-4 gap-10 md:gap-16 lg:gap-20 z-10 text-md md:text-xl bg-secondary-1">
      <div className="flex sticky buttom-0 lg:flex-col gap-14 sm:gap-8  mx-auto  font-semibold">
        <Link
          to="/feed"
          className={`flex  items-center bg-background-3 px-4 py-[0.35rem] rounded-xl  transition-all duration-300 hover:text-background-1 ${
            location.pathname === '/feed' ? 'text-white' : 'text-secondary-3'
          }`}
        >
          <BiNews />
          <span className=" ml-2 my-auto sm:block hidden">my Feed</span>
        </Link>

        <Link
          to="/profile"
          className={`flex  items-center bg-background-3 px-4 py-1 rounded-xl  transition-all duration-300 hover:text-background-1 ${
            location.pathname === '/profile' ? 'text-white' : 'text-secondary-3'
          }`}
        >
          <BsFillPersonFill />
          <span className=" ml-2 my-auto sm:block hidden">profile</span>
        </Link>
        <Link
          to="/feed"
          className="flex items-center bg-background-3 px-4 py-1 rounded-xl text-secondary-3 transition-all duration-300 hover:text-background-1"
          onClick={handleLogout}
        >
          <BiLogIn />
          <span className=" ml-2 my-auto sm:block hidden">Logout</span>{' '}
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
