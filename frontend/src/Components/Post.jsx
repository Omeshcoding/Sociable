import { useState } from 'react';

const Post = ({ post }) => {
  const [updateLike, setUpdateLike] = useState(post?.likes);
  const [like, setLike] = useState(false);
  const handleLikesUpdate = (e) => {
    console.log(e);
    if (!like) {
      setUpdateLike(updateLike + 1);
    } else {
      setUpdateLike(updateLike - 1);
    }
    setLike(!like);
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center w-[83%] sm:w-[95%] ml-[3rem] md:ml-13 lg:ml-0">
        <div>
          <h4 className="mb-4 font-bold">{post?.user?.name}</h4>
          <p className="w-[400px]">{post.title}</p>
          <p className="w-[400px]">{post.caption}</p>
          <img
            src={post?.image}
            alt=""
            className="bg-cover bg-center bg-slate-300  md:w-[400px] h-[600px] rounded-md"
          />

          <div className="flex justify-around  bg-slate-100 py-4 ">
            <button type="button" onClick={() => handleLikesUpdate()}>
              {updateLike === null ? '0' : updateLike} like
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
