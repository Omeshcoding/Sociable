import { useState } from 'react';
import { BsFillCameraFill } from 'react-icons/bs';

const CreatePost = ({ addNewPost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    file: '',
    caption: '',
  });
  const [show, setShow] = useState(false);

  const handleAddPost = (e) => {
    e.preventDefault();
    addNewPost(newPost);
  };
  const handleNewPost = (post) => {
    console.log(post);
    setNewPost((prev) => {
      return { ...prev, ...post };
    });
  };

  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-10 ">
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="bg-green-300 px-6 py-2 font-semibold rounded-md text-lg mt-10 hover:bg-green-400"
      >
        Create New Post <span className="text-xl font-bold ml-2">+</span>
      </button>
      {show && (
        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleAddPost}
          className=" font-Inter w-[90%] md:w-[60%] border-lightGray border-2 py-3 lg:py-6 px-2 lg:px-10 rounded-[10px] transition-all duration-1000 ease-in-out "
        >
          <div className="  flex flex-col">
            <h3 className="text-lg lg:text-2xl font-semibold">
              <span className=" text-2xl text-green-400">•</span> Create New
              Post
            </h3>
            <hr className="bg-orange-200 h-1" />
            <textarea
              name="post"
              cols="10"
              rows="1"
              value={newPost.title}
              className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you title"
              onChange={({ target }) => handleNewPost({ title: target.value })}
            />
            <textarea
              name="post"
              cols="10"
              rows="4"
              value={newPost.caption}
              className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you thoughts ..."
              onChange={({ target }) =>
                handleNewPost({ caption: target.value })
              }
            />
            <div className=" flex flex-col  lg:flex-row justify-between py-2">
              <label className="text-lg flex items-center gap-4 font-semibold bg-green-300 px-6 py-2 rounded-md transition-all hover:bg-green-400">
                <BsFillCameraFill /> upload photos
                <input
                  type="file"
                  name="file"
                  className="text-black text-[17px] font-normal px-2  bg-transparent rounded-lg border-gray-200 border-2 py-3 lg:py-1 my-4  lg:my-1 absolute hidden"
                  onChange={({ target }) =>
                    handleNewPost({ file: target.files })
                  }
                />
              </label>

              <button
                type="submit"
                className="text-white text-[17px] font-normal px-4 py-3 lg:py-0 bg-blue-600 hover:bg-blue-500 rounded-lg border-none ml-auto"
              >
                Post your thought
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default CreatePost;
