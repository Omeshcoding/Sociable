import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import postService from '../services/posts';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import CreatePostForm from './CreatePostForm';
import CreateCommentForm from './CreateCommentForm';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { createdTime } from '../helper/createdDate';
import { PostData } from '../context/PostWrapper';

const Post = ({ posts, user }) => {
  const { removePost } = PostData() || [];
  const [isSubmitting, setIsSubmitting] = useState(false);
  let [updateLike, setUpdateLike] = useState(posts?.likes);
  const [post, setPostUpdate] = useState(posts);

  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);
  const [showmodal, setShowmodal] = useState({
    edit: false,
    delete: false,
    comment: false,
  });

  const handleLikesUpdate = () => {
    setUpdateLike((prevUpdateLike) =>
      like ? prevUpdateLike - 1 : prevUpdateLike + 1
    );
    setLike((prevLike) => !prevLike);
    const newObject = {
      title: post.title,
      caption: post.caption,
      image: post?.image,
      likes: like ? updateLike - 1 : updateLike + 1,
    };
    postService.update(post.id, newObject);
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    console.log(e);
    postService.updatePost(posts.id, post);
    setShowmodal(!showmodal);
  };
  const fetchSingelPost = async () => {
    await postService
      .getSinglePost(post.id)
      .then((data) => setPostUpdate(data));
  };
  const handleAddComment = async (id, newComment) => {
    try {
      setIsSubmitting(true);
      await postService.createComment(id, newComment);
      fetchSingelPost();
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const toggleModal = (modelName) => {
    if (toggleModal) {
      setShowmodal((prev) => ({
        ...prev,
        [modelName]: !prev[modelName],
      }));
    }
    setShow(!show);
  };

  const timeCreated = createdTime(post.createdAt);
  return (
    <>
      {posts && (
        <div className=" bg-gray-200/70  flex  justify-center flex-col items-center sm:py-6 mb-12 lg:w-[100%]  rounded-md w-[95%] mx-auto">
          <div className="w-[95%] sm:w-[90%] md:w-[610px] mx-auto md:flex flex-col justify-center items-center    md:px-14 my-2">
            <div className="rounded-md my-1 bg-white px-5 py-3 w-full shadow-sm">
              <div className="flex justify-between relative rounded-md">
                <Link to={`/profile/${post?.user?.id}`} className="mb-4 ">
                  <h4 className="text-lg  font-semibold capitalize">
                    {' '}
                    {post.user?.name}
                  </h4>
                  <small className="text-[12px] text-bold text-gray-500">
                    {timeCreated}{' '}
                  </small>
                </Link>
                {user?.id === post?.user?.id && (
                  <>
                    <button type="button" onClick={() => setShow(!show)}>
                      <BsThreeDotsVertical />
                    </button>
                    {show && (
                      <div
                        className="absolute rounded-md top-10 right-1 flex flex-col gap-4 bg-white px-4 py-3 font-semibold "
                        onMouseLeave={() => setShow(!show)}
                      >
                        <button
                          type="button"
                          className="flex text-green-500  items-center gap-2"
                          onClick={() => toggleModal('edit')}
                        >
                          <CiEdit /> Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleModal('delete')}
                          className="flex text-rose-600 items-center gap-2"
                        >
                          <MdDelete /> Delete
                        </button>
                      </div>
                    )}
                  </>
                )}

                {showmodal.delete && (
                  <div className="absolute md:left-[-70px] bg-white w-[100%] md:w-[600px] h-[150px] top-40 mx-auto py-4 px-2 rounded-md shadow-md text-center text-xl font-semibold">
                    <h4>Do you want to Delete this Post ?</h4>
                    <div className="flex w-[70%] md:w-[50%] mx-auto justify-between sm:px-5 mt-4 sm:mt-10">
                      <button
                        type="button"
                        onClick={() => {
                          removePost(post.id, post?.title);
                          setShowmodal(!showmodal);
                        }}
                        className="text-rose-500 border-rose-300 border-2 px-4 rounded-md drop-shadow-lg hover:border-rose-500 transition-all duration-400"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="text-green-500 border-green-300 border-2 px-6 rounded-md drop-shadow-lg hover:border-green-500 py-1 transition-all duration-400"
                        onClick={() => setShowmodal(!showmodal)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}

                {showmodal.edit && (
                  <div className="absolute md:left-[-70px] bg-white w-[100%] md:w-[600px] h-[500px]  mx-auto py-4 px-2 rounded-md shadow-md">
                    <button
                      type="button"
                      className="text-black absolute  text-4xl right-4 "
                      onClick={() => setShowmodal(!showmodal)}
                    >
                      {' '}
                      <IoClose />
                    </button>
                    <div className="mt-12">
                      <CreatePostForm
                        post={posts}
                        postUpdate={post}
                        handleUpdatePost={handleUpdatePost}
                        setPostUpdate={setPostUpdate}
                      />
                    </div>
                  </div>
                )}
              </div>
              <p className="capitalize font-semibold sm:w-full mb-2">
                {post.title}
              </p>
              <p className=" text-md text-gray-600">{post.caption}</p>
            </div>
            <div>
              <img
                src={post?.image}
                alt={post?.text}
                className="bg-cover object-center bg-center bg-slate-300  w-[100%] md:w-[auto] rounded-md"
              />
            </div>

            <div className="flex justify-around  bg-white rounded-md py-4 w-[100%] my-1  lg:w-[500px] text-xl">
              <button
                type="button"
                className="flex items-center gap-2 "
                onClick={() => handleLikesUpdate()}
              >
                <span
                  className={`text-3xl ${
                    like
                      ? 'text-orange-500 drop-shadow-xl bg-transparent'
                      : 'text-slate-400'
                  }`}
                >
                  <FaHeart />
                </span>{' '}
                {updateLike} {updateLike < 10 ? 'like' : 'likes'}
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 "
                onClick={() => toggleModal('comment')}
              >
                <span className="flex justify-center gap-2 items-center text-xl text-slate-400">
                  <FaCommentAlt />
                  {post?.comments?.length}
                </span>
              </button>
            </div>
            <div className="w-[100%] mx-auto text-left bg-white px-4 py-3 rounded-md ">
              {post?.comments?.length !== undefined && showmodal.comment
                ? post.comments.map((item) => {
                    return (
                      <div key={item._id} className="mb-3 ">
                        <Comment
                          user={item?.user}
                          username={item.username}
                          createdAt={item?.createdAt}
                          content={item.text}
                          toggleModal={toggleModal}
                          show={show}
                        />
                      </div>
                    );
                  })
                : post?.comments?.length !== undefined && (
                    <Comment
                      toggleModal={toggleModal}
                      show={show}
                      username={post?.comments[0]?.username}
                      user={post?.comments[0]?.user}
                      createdAt={post?.comments[0]?.createdAt}
                      content={post?.comments[0]?.text}
                    />
                  )}
              <CreateCommentForm
                handleAddComment={handleAddComment}
                post={post}
                isSubmitting={isSubmitting}
                id={user?.id}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
