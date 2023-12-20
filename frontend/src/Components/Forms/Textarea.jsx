const Textarea = ({ rows, cols, placeholder }) => {
  return (
    <textarea
      name="post"
      cols={cols}
      rows={rows}
      className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
      placeholder={placeholder}
    />
  );
};

export default Textarea;
