const Header = () => {
  return (
    <header className="justify-center top-0 sticky bg-slate-100/70 py-4 font-bold text-green-600 mb-2 flex z-30">
      <h1 className=" ml-auto text-4xl ">Sociable</h1>
      <a href="/profile" className="ml-auto">
        My Profile
      </a>
    </header>
  );
};

export default Header;
