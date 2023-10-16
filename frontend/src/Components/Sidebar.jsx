import { useState } from 'react';
import { BiNews, BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = ({ setUser }) => {
  const [setshowNav, setSetshowNav] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem('loggedSociableappUser');
    setUser(null);
  };

  return (
    <nav className="flex flex-col h-[100%]  px-3 md:px-10 capitalize justify-center fixed top-0 bg-slate-100/95 shadow-xl py-4 gap-10 md:gap-16 lg:gap-20 ">
      <button
        type="button"
        className={` ${
          setshowNav ? 'top-6 left-[5.6rem]' : 'top-6 left-[1rem]'
        } fixed  text-2xl transition-all duration-100 ease-in-out lg:hidden`}
        onClick={() => setSetshowNav(!setshowNav)}
      >
        {setshowNav ? <AiOutlineClose /> : <MdKeyboardDoubleArrowRight />}
      </button>
      <div className="flex flex-col gap-20 ">
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
        <Link to="/" className="flex" onClick={handleLogout}>
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
