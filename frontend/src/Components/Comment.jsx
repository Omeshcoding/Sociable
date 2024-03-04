import { Link } from 'react-router-dom';
import { createdTime } from '../helper/createdDate';
const Comment = ({ username, content, user, createdAt }) => {
  const timeCreated = createdTime(createdAt);

  return (
    <>
      <Link to={`/profile/${user}`} className="mb-3">
        <p className="flex items-center gap-5 font-semibold capitalize ">
          {username}{' '}
          {createdAt && (
            <small className="text-[10px] text-bold text-gray-500">
              {timeCreated}{' '}
            </small>
          )}
        </p>
      </Link>
      <p>{content}</p>
      <hr className="text-gray-600 mt-2" />
    </>
  );
};

export default Comment;
