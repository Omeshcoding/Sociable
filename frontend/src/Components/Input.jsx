const Input = ({ type, label, value, setValue }) => {
  return (
    <div className="flex flex-col ">
      <label className="font-semibold">{label}:</label>
      <input
        type={type}
        value={value}
        className="input-field"
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
