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
      <div className="  flex  justify-center flex-col items-center py-1 ">
        <div className="mx-auto  bg-zinc-300/20 rounded-md md:px-14 my-2">
          <h4 className="mb-4 font-bold">{post?.user?.name}</h4>
          <div className="rounded-sm mb-1 bg-zinc-200 p-2 ">
            <p className="">{post.title}</p>
            <p className="">{post.caption}</p>
          </div>
          <div>
            <img
              src={post?.image}
              alt=""
              className="bg-cover bg-center bg-slate-300  w-[300px] md:w-[400px] h-[600px] rounded-md"
            />

            <div className="flex justify-around  bg-zinc-200 rounded-md py-4 w-[100%] my-2">
              <button type="button" onClick={() => handleLikesUpdate()}>
                {updateLike === null ? '0' : updateLike} like
              </button>
              <button type="button">comment</button>
              <button type="button">share</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-200 h-1 " />
    </>
  );
};

export default Post;
