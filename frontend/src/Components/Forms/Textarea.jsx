const Textarea = ({
  postUpdate,
  value,
  rows,
  cols,
  placeholder,
  setPostUpdate,
}) => {
  return (
    <textarea
      name="post"
      cols={cols}
      rows={rows}
      value={value}
      className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
      placeholder={placeholder}
      onChange={(e) =>
        setPostUpdate({ ...postUpdate, postUpdate: e.target.value })
      }
    />
  );
};

export default Textarea;
