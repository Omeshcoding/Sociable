import { useState } from 'react';

import Button from '../Components/Button';
import Input from '../Components/Input';
import '../styles/login.css';
import loginService from '../services/login';
import { Navigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({
        email,
        password,
      });
      window.localStorage.setItem(
        'loggedSociableappUser',
        JSON.stringify(user)
      );
      setUser(user);
      setEmail('');
      setPassword('');
      console.log('success');
    } catch (error) {
      console.log('wrong Credentials');
    }
  };

  return (
    <div className=" h-[100vh] mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200">
      <div className="bg-red-50 h-auto w-[500px] rounded-lg p-6 ">
        <h3 className="text-center mb-6 text-3xl  text-blue-700 font-semibold">
          Welcome To Sociable
        </h3>
        {user && <Navigate to="/feed" replace={true} />}
        <form
          onSubmit={handleLogin}
          className="flex flex-col mx-auto gap-4 w-[60%]"
        >
          <Input type="email" value={email} label="Email" setValue={setEmail} />
          <Input
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
          />
          <Button buttonType="Login" user={user} />
          <Link to="/register">
            <Button buttonType="Register" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
