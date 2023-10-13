import Input from './Input';
import Button from './Button';

const Register = () => {
  return (
    <div className=" h-[100vh] mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200">
      <div className="bg-red-50 h-auto w-[500px] rounded-lg p-6 ">
        <h3 className="text-center mb-6 text-3xl  text-blue-700 font-semibold">
          Welcome To Sociable
        </h3>
        <form className="flex flex-col mx-auto gap-4 w-[60%]">
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <Button route="/" buttonType="Register" />
          <Button route="/" buttonType="Login" />
        </form>
      </div>
    </div>
  );
};

export default Register;
