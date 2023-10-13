import { Link } from 'react-router-dom';

const Button = ({ buttonType, route }) => {
  return (
    <Link
      to={route}
      className={`${
        buttonType === 'Login'
          ? ' bg-blue-500 text-white'
          : 'text-blue-500 bg-white'
      } w-full text-center py-1 px-6 rounded-xl text-white`}
    >
      {buttonType}
    </Link>
  );
};

export default Button;
