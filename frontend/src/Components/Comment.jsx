import { Link } from 'react-router-dom';
import { createdTime } from '../helper/createdDate';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
const Comment = ({ username, content, user, createdAt }) => {
  const [show, setShow] = useState(false);
  const timeCreated = createdTime(createdAt);
  const toggleCommentModal = () => {
    setShow(!show);
  };
  return (
    <div className="relative">
      <div className=" flex justify-between">
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
        {user && (
          <button type="button" onClick={toggleCommentModal}>
            <BsThreeDotsVertical />
          </button>
        )}
      </div>
      {show && (
        <div
          className="absolute right-0 top-7 bg-gray-600 w-[100px] px-2 text-white py-2 rounded-lg"
          onMouseLeave={() => setShow(!show)}
        >
          <button type="button" className="flex gap-2 items-center">
            <CiEdit />
            {'Edit '}
          </button>
          <button type="button" className="flex gap-2 items-center">
            <MdDelete /> Delete
          </button>
        </div>
      )}
      <p>{content}</p>
      <hr className="text-gray-600 mt-2" />
    </div>
  );
};

export default Comment;
