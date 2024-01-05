const Comment = ({ username, content }) => {
  return (
    <>
      <p className="font-bold capitalize mb-1">{username}</p>
      <p>{content}</p>
      <hr className="text-gray-600 mt-2" />
    </>
  );
};

export default Comment;
