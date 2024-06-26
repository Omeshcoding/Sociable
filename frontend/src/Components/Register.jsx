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

  return (
    <div className="h-[650px] sm:h-[100vh] mx-auto flex-col flex items-center justify-center  bg-hero-pattern bg-cover ">
      <div className="bg-background-3 h-auto mx-1 sm:w-[500px] rounded-lg sm:p-6 px-12 py-8 ">
        <h3 className="text-center mb-6 text-3xl  text-secondary-3 font-semibold">
          Welcome To Sociable
        </h3>
        <form
          onSubmit={handleRegisterUser}
          className="flex flex-col mx-auto gap-4 sm:w-[60%]"
        >
          {newUser && <Navigate to="/feed" replace={true} />}

          <Input
            type="name"
            placeholder="John dew"
            label="Name"
            name={name}
            setValue={setName}
          />
          <Input type="email" label="Email" email={email} setValue={setEmail} />

          <Input
            type="password"
            label="Password"
            password={password}
            setValue={setPassword}
          />
          <Button
            type="submit"
            btnName="Register"
            btnStyle=" bg-secondary-3  text-background-3 font-semibold  w-full text-center py-2 px-6 rounded-xl "
          />
          <Link to="/login">
            <Button
              type="submit"
              btnName="Login"
              btnStyle=" bg-background-1 text-background-3 font-semibold w-full text-center py-2 px-6 rounded-xl "
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
