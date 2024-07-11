const Input = ({ type, label, value, setValue }) => {
  return (
    <div className="flex flex-col ">
      <label className="font-semibold text-background-4">{label}:</label>
      <input
        type={type}
        value={value}
        required
        className="input-field  p-2 rounded-md text-secondary-2 outline-none"
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
