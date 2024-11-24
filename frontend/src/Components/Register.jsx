import { useState } from 'react';
import Input from './Input';
import Button from '../Components/ReusableComponents/Button';
import userService from '../services/newUser';
import { Link, Navigate } from 'react-router-dom';
import Footer from './ReusableComponents/Footer';
import Spinner from './Loaders/Spinner';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleRegisterUser = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    console.log(isSubmitting);
    try {
      const user = await userService.register({
        email,
        name,
        password,
      });
      console.log(user.config);
      setNewUser(user);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error.message);
      setIsSubmitting(false);
    }
  };
  if (isSubmitting) {
    return <Spinner style="h-[100vh] w-[300px]" />;
  }

  return (
    <>
      {' '}
      <div className="bg-[#FAE800]/30 py-2 min-md:py-6   max-lg:px-6 max-md:px-2 items-center pt-3">
        <div className=" w-[90%] lg:w-[85%]  mx-auto flex justify-between">
          <h1 className="  max-md:text-xl text-3xl font-bold text-secondary-3">
            Sociable
          </h1>
          <Link to="/login">
            <Button
              type="button"
              btnName="Login"
              btnStyle=" bg-background-1 hover:bg-background-1/80 text-background-3 font-semibold min-md:w-[220px] text-center py-2 px-6 rounded-xl transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div className=" bg-[#F8F4C1] md:py-10   h-auto ">
        <div className="  flex items-center justify-between mx-auto  min-[450px]:w-[85%] md:h-[80vh] max-md:flex-col gap-4">
          <div className="max-md:text-center max-md:mx-1 w-[100%]  max-md:px-8">
            <h1 className="  max-md:text-3xl text-4xl font-bold text-background-3  ">
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
          <div className="bg-background-3/95 h-auto md:w-[600px] w-[95%] mx-2 rounded-lg md:p-6 px-6 md:px-8 py-12">
            <h3 className="text-left mb-8 text-3xl  text-secondary-3 font-semibold">
              Register Now
            </h3>
            <form
              onSubmit={handleRegisterUser}
              className="flex flex-col mx-auto gap-4 "
            >
              {newUser && <Navigate to="/feed" replace={true} />}

              <Input
                type="name"
                placeholder="John dew"
                label="Name"
                name={name}
                setValue={setName}
              />
              <Input
                type="email"
                label="Email"
                email={email}
                setValue={setEmail}
              />

              <Input
                type="password"
                label="Password"
                password={password}
                setValue={setPassword}
              />
              <Button
                type="submit"
                btnName={isSubmitting ? 'Register. . .' : 'Register'}
                btnStyle=" bg-secondary-3 hover:bg-background-1 text-background-3 font-semibold  w-full text-center py-2 px-6 rounded-xl "
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
