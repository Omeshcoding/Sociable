import { BsPersonCircle } from 'react-icons/bs';
const Header = ({ name }) => {
  return (
    <header className="justify-between top-0 sticky bg-slate-100/70 py-4 px-8 font-bold text-green-600  flex shadow-lg z-30">
      <h1 className="  text-4xl ">Sociable</h1>
      <a href="/profile" className="flex items-center gap-2 ">
        <span className="text-2xl mt-1">
          <BsPersonCircle />{' '}
        </span>
        {name}
      </a>
    </header>
  );
};

export default Header;
