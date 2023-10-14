const Button = ({ buttonType }) => {
  return (
    <button
      type="submit"
      className={`${' bg-blue-500 text-white'} w-full text-center py-1 px-6 rounded-xl text-white`}
    >
      {buttonType}
    </button>
  );
};

export default Button;
