import { useState } from 'react';
import { ImHome3 } from 'react-icons/Im';
import { BiNews, BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [setshowNav, setSetshowNav] = useState(false);
  return (
    <nav className="flex flex-col h-[100%]  px-3 justify-center fixed top-0 bg-slate-400 gap-10 md:gap-16 lg:gap-20">
      <button
        type="button"
        className={` ${
          setshowNav ? 'top-6 left-[5.6rem]' : 'top-6 left-[1rem]'
        } fixed  text-2xl transition-all duration-100 ease-in-out lg:hidden`}
        onClick={() => setSetshowNav(!setshowNav)}
      >
        {setshowNav ? <AiOutlineClose /> : <MdKeyboardDoubleArrowRight />}
      </button>
      <Link to="/" className="flex align-center">
        {setshowNav && ' home'}
        <span className="ml-2 my-auto">
          <ImHome3 />
        </span>
      </Link>
      <Link to="#" className="flex align-center">
        {setshowNav && ' my Feed'}
        <span className="ml-2 my-auto">
          <BiNews />
        </span>
      </Link>

      <Link to="/profile" className="flex">
        {setshowNav && ' profile'}
        <span className=" ml-2 my-auto">
          <BsFillPersonFill />
        </span>{' '}
      </Link>
      <Link to="/" className="flex">
        {setshowNav && ' Login/Signup'}
        <span className=" ml-2 my-auto">
          <BiLogIn />
        </span>{' '}
      </Link>
    </nav>
  );
};

export default Sidebar;
