import '../styles/login.css';

const Login = () => {
  return (
    <div className=" h-[100vh] mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200">
      <div className="bg-red-50 h-auto w-[500px] rounded-lg p-6 ">
        <h3 className="text-center mb-6 text-3xl  text-blue-700 font-semibold">
          Welcome To Sociable
        </h3>
        <div className="flex flex-col mx-auto gap-4 w-[60%]">
          <div className="flex flex-col ">
            <label className="font-semibold">Email:</label>
            <input type="text" className="input-field" />
          </div>
          <div className="flex flex-col ">
            <label className="font-semibold">Password:</label>
            <input type="text" className="input-field" />
          </div>
          <button className="bg-blue-500 w-full mx-auto py-1 px-6 rounded-xl text-white">
            Login
          </button>
          <button className="bg-red-500 w-full mx-auto py-1 px-6 rounded-xl text-white">
            Register
          </button>
          <a href="#" className="text-center">
            Forget your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
