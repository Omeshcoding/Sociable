const Header = () => {
  return (
    <header className="justify-between top-0 sticky bg-slate-100/70 py-4 px-6 font-bold text-green-600 mb-2 flex shadow-lg z-30">
      <h1 className="  text-4xl ">Sociable</h1>
      <a href="/profile" className="">
        My Profile
      </a>
    </header>
  );
};

export default Header;
