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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false);
      setEmail('');
      setPassword('');
      navigate('/feed');
    } catch (error) {
      setNotification({
        message: 'Wrong email or password',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);
      console.log('wrong Credentials');
    }
  };

  const populateForm = () => {
    const email = 'jay@gmail.com';
    const password = 'jayjayjay';
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className=" h-[100vh]  sm:mx-auto flex-col flex items-center justify-center rounded-lg bg-slate-200 mx-1">
      <div className="h-10 mb-10">
        {notification.type === 'error' && (
          <ErrorNotification
            message={notification.message}
            type={notification.type}
          />
        )}
      </div>

      <div className="bg-background-3 h-auto md:w-[500px] rounded-lg md:p-6 px-12 py-8">
        <h3 className="text-center mb-6 text-3xl  text-secondary-3 font-semibold">
          Welcome To Sociable
        </h3>

        <form
          onSubmit={handleLogin}
          className="flex flex-col mx-auto gap-4 md:w-[60%]"
        >
          <Input type="email" value={email} label="Email" setValue={setEmail} />
          <Input
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
          />

          <span
            className="text-white border-2 border-secondary-3 text-center py-2 rounded-xl font-semibold"
            onClick={populateForm}
          >
            Sign in as a Test User
          </span>

          <Button
            btnName={isSubmitting ? 'Logging in' : 'Login'}
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
