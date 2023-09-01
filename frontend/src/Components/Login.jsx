const Login = () => {
  return (
    <div className=" h-[100vh] mx-auto flex-col flex items-center justify-center rounded-lg">
      <div className="bg-red-50 h-[300px] w-[500px] p-4 ">
        <h3 className="text-center mb-6 text-3xl">Welcome to Sociable</h3>
        <div className="flex flex-col mx-auto gap-4 w-[60%]">
          <div className="flex flex-col ">
            <label>Email</label>
            <input
              type="text"
              className="outline-none  focus:border-b-black border-2 bg-transparent "
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input type="text" />
          </div>
          <a href="#" className="text-center">
            Forget your password?
          </a>
          <button className="bg-red-500  mx-auto py-1 px-6 rounded-xl text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
