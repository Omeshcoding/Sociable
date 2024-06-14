import { Link } from 'react-router-dom';

const PostHeader = ({ id, time, name }) => {
  return (
    <Link to={`/profile/${id}`} className="mb-4">
      <h4 className="text-lg  font-semibold capitalize"> {name}</h4>
      <small className="text-[12px] text-bold text-gray-500">{time} </small>
    </Link>
  );
};

export default PostHeader;
