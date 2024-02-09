const SuccessNotification = ({ message, type }) => {
  if (!type) return null;
  return (
    <div className="h-10  bg-green-200 px-4 py-1  border-green-400 border-4 rounded-xl shadow-lg text-zinc-800 text-lg">
      {message}
    </div>
  );
};

const ErrorNotification = ({ message, type }) => {
  if (!type) return null;
  return (
    <div
      className={` bg-rose-400 px-4 py-1  border-rose-500 border-4 rounded-xl shadow-lg text-zinc-300 text-lg`}
    >
      {message}
    </div>
  );
};

export { SuccessNotification, ErrorNotification };
