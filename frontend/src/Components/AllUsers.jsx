import React from 'react';
import { Link } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';

const AllUsers = ({ name, id }) => {
  return (
    <Link
      to={`/profile/${id}`}
      key={id}
      className="flex items-center gap-2 mt-4 text-background-3 font-semibold capitalize text-left cursor-pointer"
    >
      <i>
        <ImProfile />
      </i>
      {name}
    </Link>
  );
};

export default AllUsers;
