import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import userService from '../services/newUser';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(null);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.register({
        email,
        name,
        password,
      });
      setNewUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newUser);
  return (
    <div className=" h-[100vh] mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200">
      <div className="bg-red-50 h-auto w-[500px] rounded-lg p-6 ">
        <h3 className="text-center mb-6 text-3xl  text-blue-700 font-semibold">
          Welcome To Sociable
        </h3>
        <form
          onSubmit={handleRegisterUser}
          className="flex flex-col mx-auto gap-4 w-[60%]"
        >
          {newUser && <Navigate to="/feed" replace={true} />}
          <Input type="email" label="Email" email={email} setValue={setEmail} />
          <Input type="name" label="Name" name={name} setValue={setName} />
          <Input
            type="password"
            label="Password"
            password={password}
            setValue={setPassword}
          />
          <Button buttonType="Register" />
          <Link to="/">
            <Button buttonType="Login" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
