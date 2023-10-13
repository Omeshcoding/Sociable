const Input = ({ type, label }) => {
  return (
    <div className="flex flex-col ">
      <label className="font-semibold">{label}:</label>
      <input type={type} className="input-field" />
    </div>
  );
};

export default Input;
