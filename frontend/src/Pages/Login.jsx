import { useState } from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import '../styles/login.css';
import loginService from '../services/login';
import { Link } from 'react-router-dom';
import { ErrorNotification } from '../Components/ErrorHandler';
import { AuthData } from '../auth/AuthWrapper';
import Loading from '../Components/Loaders/Loading';
const Login = () => {
  const { login } = AuthData() || {};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const user = await loginService.login({
        email,
        password,
      });
      await login(user);
      window.localStorage.setItem(
        'loggedSociableappUser',
        JSON.stringify(user)
      );
      setIsSubmitting(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setIsSubmitting(false);
      setNotification({
        message: 'Wrong email or password',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);
    }
  };

  const populateForm = () => {
    const email = 'jay@gmail.com';
    const password = import.meta.env.VITE_API_USER_PASSWORD;
    setEmail(email);
    setPassword(password);
  };
  if (isSubmitting) {
    return <Loading />;
  }
  return (
    <div className=" h-[100vh]  sm:mx-auto flex-col flex items-center justify-center  bg-hero-pattern mx-1 bg-cover">
      <div className="relative bg-background-3 h-auto md:w-[500px] rounded-lg md:p-6 px-12 py-8">
        <h3 className="text-center mb-6 text-3xl  text-secondary-3 font-semibold">
          Welcome To Sociable
        </h3>
        <div className="absolute w-[90%] top-14 mx-auto h-10 mb-10 text-center">
          {notification.type === 'error' && (
            <ErrorNotification
              message={notification.message}
              type={notification.type}
            />
          )}
        </div>
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
            className="text-white border-2 border-secondary-3 text-center py-2 rounded-xl font-semibold cursor-pointer"
            onClick={populateForm}
          >
            Sign in as a Test User
          </span>

          <Button
            btnName={isSubmitting ? 'Logging you in . . .' : 'Login'}
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
