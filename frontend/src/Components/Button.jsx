const Button = ({ btnName, btnStyle, type }) => {
  return (
    <button type={type} className={btnStyle}>
      {btnName}
    </button>
  );
};

export default Button;
