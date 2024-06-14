import { Suspense, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import postService from '../services/posts';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';

import { IoClose } from 'react-icons/io5';
import CreatePostForm from './CreatePostForm';
import CreateCommentForm from './CreateCommentForm';
import Comment from './Comment';

import { createdTime } from '../helper/createdDate';
import { PostData } from '../context/PostWrapper';
import Loading from './Loading';
import PostHeader from './Post/PostHeader';
import Editsubmenu from './Post/Editsubmenu';

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
  const handleDeleteComment = async (id) => {
    console.log(id);
    // await postService.deleteComments(id);
    // fetchSingelPost();
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

  const handleShow = () => {
    setShow(!show);
  };
  const handleDeletePost = (id, title) => {
    removePost(id, title);
    setShowmodal(!showmodal);
  };
  const timeCreated = createdTime(post.createdAt);

  return (
    <>
      {posts && (
        <div className=" bg-gray-200/70  flex  justify-center flex-col items-center sm:py-6 mb-12 lg:w-[100%]  rounded-md w-[95%] mx-auto">
          <div className="w-[95%] sm:w-[90%] md:w-[610px] mx-auto md:flex flex-col justify-center items-center    md:px-14 my-2">
            <div className="rounded-md my-1 bg-white px-5 py-3 w-full shadow-sm">
              <div className="flex relative justify-between  rounded-md z-0">
                <PostHeader
                  time={timeCreated}
                  name={post.user?.name}
                  id={post.user?.id}
                />

                {user?.id === post?.user?.id && (
                  <div className="relative top-2">
                    <button type="button" onClick={() => setShow(!show)}>
                      <BsThreeDotsVertical />
                    </button>
                    {show && (
                      <Editsubmenu
                        handleShow={handleShow}
                        toggleModal={toggleModal}
                        show={show}
                      />
                    )}
                  </div>
                )}

                {showmodal.delete && (
                  <div className="absolute md:left-[-70px] bg-white w-[100%] md:w-[600px] h-[150px] top-40 mx-auto py-4 px-2 rounded-md shadow-md text-center text-xl font-semibold">
                    <h4>Do you want to Delete this Post ?</h4>
                    <div className="flex w-[70%] md:w-[50%] mx-auto justify-between sm:px-5 mt-4 sm:mt-10">
                      <button
                        type="button"
                        onClick={() => handleDeletePost(post.id, post?.title)}
                        className="text-rose-500 border-rose-300 border-2 px-4 rounded-md drop-shadow-lg hover:border-rose-500 transition-all duration-400"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="text-green-500 border-green-300 border-2 px-6 rounded-md drop-shadow-lg hover:border-green-500 py-1 transition-all duration-400"
                        onClick={() => setShowmodal(!showmodal.delete)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}

                {showmodal.edit && (
                  <div
                    className="absolute md:left-[-70px] bg-white w-[100%] md:w-[600px] h-[500px]  mx-auto py-4 px-2 rounded-md shadow-md z-20"
                    onMouseLeave={() => setShowmodal(!showmodal.edit)}
                  >
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
            {post?.image !== null && (
              <div>
                <Suspense fallback={<Loading />}>
                  {' '}
                  <img
                    src={post?.image}
                    alt={post?.text}
                    loading="lazy"
                    className="bg-cover object-center bg-center bg-slate-300  w-[100%] md:w-[auto] rounded-md"
                  />
                </Suspense>
              </div>
            )}

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
                      <div key={item.id} className="mb-3 ">
                        <Comment
                          commentUser={item?.user}
                          username={item.username}
                          createdAt={item?.createdAt}
                          content={item.text}
                          toggleModal={toggleModal}
                          show={show}
                          commentId={item.id}
                          handleDeleteComment={handleDeleteComment}
                        />
                      </div>
                    );
                  })
                : post?.comments?.length !== undefined && (
                    <Comment
                      toggleModal={toggleModal}
                      show={show}
                      username={post?.comments[0]?.username}
                      commentUser={post?.comments[0]?.user}
                      createdAt={post?.comments[0]?.createdAt}
                      content={post?.comments[0]?.text}
                      commentId={post?.comments[0]?.id}
                      handleDeleteComment={handleDeleteComment}
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
