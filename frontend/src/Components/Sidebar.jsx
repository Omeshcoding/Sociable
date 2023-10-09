import { useState } from 'react';
import { ImHome3 } from 'react-icons/Im';
import { BiNews } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Sidebar = () => {
  const [setshowNav, setSetshowNav] = useState(false);
  return (
    <nav className="flex flex-col h-[100vh]  px-5 justify-center fixed bg-slate-400 gap-10 md:gap-16 lg:gap-20">
      <button
        type="button"
        className={` ${
          setshowNav ? 'top-6 left-[6.6rem]' : 'top-6 left-[1.4rem]'
        } fixed  text-2xl transition-all duration-100 ease-in-out lg:hidden`}
        onClick={() => setSetshowNav(!setshowNav)}
      >
        {setshowNav ? <AiOutlineClose /> : <MdKeyboardDoubleArrowRight />}
      </button>
      <a href="#" className="flex align-center">
        {setshowNav && ' home'}
        <span className="ml-2 my-auto">
          <ImHome3 />
        </span>
      </a>
      <a href="#" className="flex align-center">
        {setshowNav && ' my Feed'}
        <span className="ml-2 my-auto">
          <BiNews />
        </span>
      </a>
      <a href="#"> {setshowNav && ' Login/Signup'}</a>
      <a href="#">{setshowNav && ' profile'}</a>
    </nav>
  );
};

export default Sidebar;
