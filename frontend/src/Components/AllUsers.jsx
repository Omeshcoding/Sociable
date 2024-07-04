import React from 'react';
import { Link } from 'react-router-dom';

const AllUsers = ({ name, id }) => {
  return (
    <Link
      to={`/profile/${id}`}
      key={id}
      className="mt-4 text-background-3 font-semibold capitalize text-left cursor-pointer"
    >
      {name}
    </Link>
  );
};

export default AllUsers;
