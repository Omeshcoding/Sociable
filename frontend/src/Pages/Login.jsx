import { useState } from 'react';

import Button from '../Components/Button';
import Input from '../Components/Input';
import '../styles/login.css';
import loginService from '../services/login';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorNotification } from '../Components/ErrorHandler';
import { AuthData } from '../auth/AppWrapper';

const Login = () => {
  const { login } = AuthData() || {};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({
        email,
        password,
      });
      login(user);
      window.localStorage.setItem(
        'loggedSociableappUser',
        JSON.stringify(user)
      );
      setEmail('');
      setPassword('');
      navigate('/feed');
    } catch (error) {
      setNotification({
        message: 'Wrong username or password',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);
      console.log('wrong Credentials');
    }
  };

  return (
    <div className=" h-[100vh]  mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200">
      <div className="h-10 mb-10">
        {notification.type === 'error' && (
          <ErrorNotification
            message={notification.message}
            type={notification.type}
          />
        )}
      </div>

      <div className="bg-background-3 h-auto w-[500px] rounded-lg p-6 ">
        <h3 className="text-center mb-6 text-3xl  text-secondary-3 font-semibold">
          Welcome To Sociable
        </h3>

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
          <Button
            btnName="Login"
            type="submit"
            btnStyle="bg-secondary-3  text-background-3 font-semibold  w-full text-center py-2 px-6 rounded-xl "
          />
          <Link to="/register">
            <Button
              type="submit"
              btnName="Register"
              btnStyle=" bg-background-1 text-background-3 font-semibold w-full text-center py-2 px-6 rounded-xl "
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
