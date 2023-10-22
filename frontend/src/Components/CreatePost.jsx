import { useState } from 'react';

const CreatePost = ({ addNewPost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    file: '',
    caption: '',
  });

  const handleAddPost = (e) => {
    e.preventDefault();
    addNewPost(newPost);
    // setNewPost
  };
  const handleNewPost = (post) => {
    console.log(post);
    setNewPost((prev) => {
      return { ...prev, ...post };
    });
  };

  return (
    <section className="mt-8 flex justify-center">
      <form
        action="/upload"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleAddPost}
        className=" font-Inter w-[90%] md:w-[60%] border-lightGray border-2 py-3 lg:py-6 px-2 lg:px-10 rounded-[10px]  "
      >
        <div className="  flex flex-col">
          <h3 className="text-lg lg:text-2xl font-semibold">
            <span className=" text-2xl text-green-400">•</span> Create New Post
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
            onChange={({ target }) => handleNewPost({ caption: target.value })}
          />
          <div className=" flex flex-col  lg:flex-row justify-between py-2">
            <input
              type="file"
              name="file"
              className="text-black text-[17px] font-normal px-2  bg-transparent rounded-lg border-gray-200 border-2 py-3 lg:py-1 my-4  lg:my-1"
              onChange={({ target }) => handleNewPost({ file: target.files })}
            />

            <button
              type="submit"
              className="text-white text-[17px] font-normal px-4 py-3 lg:py-0 bg-blue-600 rounded-lg border-none ml-auto"
            >
              Post your thought
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
