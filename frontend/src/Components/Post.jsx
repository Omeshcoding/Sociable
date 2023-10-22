import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Post = ({ post, user }) => {
  const [updateLike, setUpdateLike] = useState(post?.likes);
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);

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
      <div className="  flex  justify-center flex-col items-center py-1 mb-12">
        <div className="w-[90%] md:w-[610px] mx-auto md:flex flex-col justify-center items-center  bg-zinc-300/10 rounded-md md:px-14 my-2">
          <div className="rounded-md my-2 bg-zinc-200/50 px-5 py-3 w-full shadow-sm">
            <div className="flex justify-between relative rounded-md">
              <h4 className="mb-4 font-bold">{user?.name}</h4>
              {user && (
                <>
                  <button onClick={() => setShow(!show)}>
                    <BsThreeDotsVertical />
                  </button>
                  {show && (
                    <div className="absolute rounded-md top-10 right-1 flex flex-col gap-4 bg-white px-4 py-3 ">
                      <a href="">Edit</a>
                      <a href="">Delete</a>
                    </div>
                  )}
                </>
              )}
            </div>
            <p className=" sm:w-60 md:w-full">{post.title}</p>
            <p className="">{post.caption}</p>
          </div>
          <div>
            <img
              src={post?.image}
              alt=""
              className="bg-cover bg-center bg-slate-300  w-[100%] md:w-[500px] h-[600px] rounded-md"
            />
          </div>

          <div className="flex justify-around  bg-zinc-200/50 rounded-md py-4 w-[100%] my-2  lg:w-[510px]">
            <button type="button" onClick={() => handleLikesUpdate()}>
              {updateLike === null ? ' ' : updateLike} like
            </button>
            <button type="button">comment</button>
            <button type="button">share</button>
          </div>
        </div>
      </div>
      <hr className="bg-gray-200 h-1 " />
    </>
  );
};

export default Post;
