import { useState } from 'react';
import Button from '../Components/ReusableComponents/Button';
import Input from '../Components/Input';
import '../styles/login.css';
import loginService from '../services/login';
import { Link } from 'react-router-dom';
import { ErrorNotification } from '../Components/ErrorHandler';
import { AuthData } from '../auth/AuthWrapper';
import Loading from '../Components/Loaders/Loading';
import Footer from '../Components/ReusableComponents/Footer';
import Spinner from '../Components/Loaders/Spinner';
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
        message: 'Wrong Email or Password',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);
    }
  };

  const populateForm = () => {
    const email = import.meta.env.VITE_API_USER_EMAIL;
    const password = import.meta.env.VITE_API_USER_PASSWORD;
    setEmail(email);
    setPassword(password);
  };
  if (isSubmitting) {
    return <Spinner style="h-[100vh] w-[300px]" />;
  }
  return (
    <>
      <div className="bg-[#FAE800]/30 py-2 min-md:py-6   max-lg:px-6 max-md:px-2 items-center pt-3">
        <div className="w-[90%] lg:w-[85%]  mx-auto flex justify-between">
          <h1 className="  max-md:text-xl text-3xl font-bold text-secondary-3">
            Sociable
          </h1>
          <Link to="/register">
            <Button
              type="button"
              btnName="Register"
              btnStyle=" bg-background-1 hover:bg-background-1/80 text-background-3 font-semibold min-md:w-[220px] text-center py-2 px-2 rounded-xl transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div className=" bg-[#F8F4C1]  py-10 h-auto">
        <div className="flex items-center justify-between mx-auto lg:px- py-10  min-[450px]:w-[85%] md:h-[80vh] max-md:flex-col gap-4">
          <div className="max-md:text-center  max-md:mx-1 w-[100%]">
            <h1 className="  max-md:text-3xl text-4xl font-bold text-background-3  max-md:mt-14">
              Welcome To Sociable
            </h1>
            <p className="text-gray-600">
              Share Innovation, Spark Ideas, Connect with the Future.
            </p>
            <img
              src="/socialhome.svg"
              alt="sociable"
              className="w-[60%] max-sm:mx-auto ml-10 my-10"
            />
          </div>
          <div className="relative bg-background-3/95 h-auto md:w-[600px] w-[95%] mx-2 rounded-lg md:p-6 px-6 md:px-8 py-12">
            <h3 className="text-left mb-10 text-3xl  text-secondary-3 font-semibold">
              Login Now
            </h3>
            <div className="absolute max-md:left-6 left-7  w-[90%] top-16 max-sm:top-[92px]  h-10 mb-10 text-center">
              {notification.type === 'error' && (
                <ErrorNotification
                  message={notification.message}
                  type={notification.type}
                />
              )}
            </div>
            <form
              onSubmit={handleLogin}
              className="flex flex-col mx-auto gap-4 "
            >
              <Input
                type="email"
                value={email}
                label="Email"
                setValue={setEmail}
              />
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
                btnStyle="bg-secondary-3 hover:bg-background-1 text-background-3  font-semibold  w-full text-center py-2 px-6 rounded-xl "
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
