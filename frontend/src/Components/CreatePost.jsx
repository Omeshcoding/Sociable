import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { PostData } from '../context/PostWrapper';
import { ErrorNotification } from './ErrorHandler';

const CreatePost = () => {
  const { addPosts, isSubmitting, notification } = PostData() || [];
  const [newPost, setNewPost] = useState({
    title: '',
    file: '',
    caption: '',
  });
  const [show, setShow] = useState(false);
  const handleAddPost = (e) => {
    e.preventDefault();
    addPosts(newPost);
    setNewPost({
      title: '',
      file: '',
      caption: '',
    });
  };
  const handleNewPost = (post) => {
    setNewPost((prev) => {
      return { ...prev, ...post };
    });
  };
  return (
    <section className="my-8 flex flex-col items-center justify-center gap-10 max-md:w-[100vw] md:w-[50vw]">
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="flex items-center justify-center gap-3 bg-secondary-3 px-6 py-2 font-semibold rounded-md text-lg mt-10 text-background-3 hover:bg-background-1 transition-all duration-300 "
      >
        <span className="text-xl ml-2">Create New Post </span>
        {!show ? <FaPlus /> : <FaMinus />}
      </button>
      {show && (
        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleAddPost}
          className=" font-Inter w-[90%] md:w-[100%]  border-lightGray 
          bg-background-3
          border-2 py-3 lg:py-6 px-3 md:px-6 lg:px-10 rounded-[10px] transition-all duration-1000 ease-in-out "
        >
          <div className="flex flex-col gap-4 relative">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-3 ">
              <span className=" text-2xl text-background-1">•</span> Create New
              Post
            </h3>
            <hr className="bg-background-1 h-1" />
            <textarea
              name="post"
              cols="10"
              rows="1"
              value={newPost.title}
              className="outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you title"
              onChange={({ target }) => handleNewPost({ title: target.value })}
            />
            <textarea
              name="post"
              cols="10"
              rows="4"
              value={newPost.caption}
              className=" outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you thoughts ..."
              onChange={({ target }) =>
                handleNewPost({ caption: target.value })
              }
            />
            <div className=" flex  justify-center py-2 ">
              <input
                type="file"
                name="file"
                accept="image/*"
                id="upload-file"
                hidden
                className=" text-background-1 text-[17px] font-normal px-2  bg-transparent rounded-lg border-gray-200 border-2 py-3 lg:py-1    "
                onChange={({ target }) =>
                  handleNewPost({ file: target.files[0] })
                }
              />
              <label
                htmlFor="upload-file"
                className=" text-background-3 font-semibold text-[17px] max-md:text-sm  first-letter: px-4 py-3   bg-secondary-3 cursor-pointer  hover:bg-background-1 rounded-lg border-none "
              >
                Upload image
              </label>

              <button
                type="submit"
                className="text-background-3 font-semibold text-[17px] max-md:text-sm  first-letter: px-4 py-3  bg-secondary-3 hover:bg-background-1 rounded-lg border-none ml-auto"
              >
                {isSubmitting ? 'Posting' : 'Post'}
              </button>
            </div>
            <div className="absolute bottom-4 h-10 mb-10 right-0">
              {notification.type === 'error' && (
                <ErrorNotification
                  message={notification.message}
                  type={notification.type}
                />
              )}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default CreatePost;
