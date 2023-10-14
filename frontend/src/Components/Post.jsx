import { useState } from 'react';
import HanumanJi from '../assets/Lord-Hanuman.jpg';

const Post = () => {
  const [updateLike, setUpdateLike] = useState(0);
  return (
    <>
      <div className="flex justify-center flex-col items-center w-[83%] sm:w-[95%] ml-[3rem] md:ml-13 lg:ml-0">
        <div>
          <h4 className="mb-4">user name</h4>
          <img
            src={HanumanJi}
            alt=""
            className=" bg-slate-300  md:w-[400px] h-[600px] rounded-md"
          />
          <div className="flex justify-around  bg-slate-100 py-4 ">
            <button type="button" onClick={() => setUpdateLike(updateLike + 1)}>
              {updateLike === 0 ? '' : updateLike} like
            </button>
            <button type="button">comment</button>
            <button type="button">share</button>
          </div>
        </div>
      </div>
      <hr className="bg-gray-200 h-1 my-10" />
    </>
  );
};

export default Post;
