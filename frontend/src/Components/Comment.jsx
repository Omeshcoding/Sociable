import { Link } from 'react-router-dom';

const Comment = ({ username, content, user }) => {
  return (
    <>
      <Link to={`/profile/${user}`}>
        <p className="font-bold capitalize mb-1">{username}</p>
      </Link>
      <p>{content}</p>
      <hr className="text-gray-600 mt-2" />
    </>
  );
};

export default Comment;
