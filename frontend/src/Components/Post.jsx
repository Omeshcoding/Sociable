import { Suspense, lazy, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import postService from '../services/posts';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';

import { IoClose } from 'react-icons/io5';
import CreatePostForm from './CreatePostForm';
import CreateCommentForm from './CreateCommentForm';
import Comment from './Comment';

import { createdTime } from '../helper/createdDate';
import { PostData } from '../context/PostWrapper';
import Loading from './Loaders/Loading';
import PostHeader from './Post/PostHeader';
import Editsubmenu from './Post/Editsubmenu';
import ActionPrompts from './ReusableComponents/ActionPrompts';
import Spinner from './Loaders/Spinner';

const Image = lazy(() => import('./ReusableComponents/Image'));

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
    setIsSubmitting(true);
    await postService
      .getSinglePost(post.id)
      .then((data) => setPostUpdate(data));
    setIsSubmitting(false);
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
    await postService.deleteComments(id, user.id);
    fetchSingelPost();
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
  if (isSubmitting) {
    return <Loading />;
  }
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
                  <ActionPrompts
                    type="Post"
                    handleDeleteItem={handleDeletePost}
                    toggleModal={toggleModal}
                    id={post?.id}
                    title={post?.title}
                  />
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
            {post?.image && (
              <div>
                <Suspense fallback={<Spinner style="h-[300px] p-10" />}>
                  {' '}
                  <Image
                    srcImage={post?.image}
                    altText={post?.text}
                    loading="lazy"
                    style="bg-cover object-center bg-center bg-slate-300  w-[100%] md:w-[auto] rounded-md"
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
              <CreateCommentForm
                handleAddComment={handleAddComment}
                post={post}
                isSubmitting={isSubmitting}
                id={user?.id}
              />
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

async function delayLoadingContent(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 6000);
  });
  return promise;
}
export default Post;
