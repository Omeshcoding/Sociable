import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Header = ({ name, id }) => {
  return (
    <header className="justify-between top-0 sticky bg-background-3 py-4 px-8 font-bold   flex shadow-lg z-30">
      <h1 className=" text-secondary-3 text-4xl ">Sociable</h1>
      <Link
        to={`/profile/${id}`}
        className="flex text-secondary-3 capitalize items-center gap-2 "
      >
        <span className=" text-2xl mt-1">
          <BsPersonCircle />{' '}
        </span>
        {name}
      </Link>
    </header>
  );
};

export default Header;
