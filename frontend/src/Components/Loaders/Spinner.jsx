import React from 'react';
import spinner from './Spinner.svg';
const Spinner = ({ style }) => {
  return (
    <>
      <img src={spinner} alt="" className={`${style} mx-auto`} />
    </>
  );
};

export default Spinner;
