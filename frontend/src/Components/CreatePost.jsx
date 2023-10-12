const CreatePost = () => {
  return (
    <section className="mt-8 flex justify-center">
      <>
        <form className="font-Inter w-[70%]  border-lightGray border-4 py-3 lg:py-6 px-2 lg:px-10 rounded-[10px] ml-12 ">
          <div className="flex flex-col">
            <h3 className="text-lg lg:text-2xl font-semibold">
              <span className=" text-2xl text-green-400">•</span> Create New
              Post
            </h3>
            <hr className="bg-orange-200 h-1" />
            <textarea
              name="post"
              cols="10"
              rows="1"
              className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you title"
            />
            <textarea
              name="post"
              cols="10"
              rows="4"
              className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
              placeholder="Write you thoughts ..."
            />
            <div className=" flex justify-between h-14">
              <input
                type="file"
                name="myImage"
                className="text-black text-[17px] font-normal px-2 py-2 bg-transparent rounded-lg border-gray-200 border-2"
                // onChange={(event) => {
                //   console.log(event.target.files[0]);
                //   setSelectedImage(event.target.files[0]);
                // }}
              />

              <button className="text-white text-[17px] font-normal px-4 py-1 bg-blue-600 rounded-lg border-none ml-auto">
                Post your thought
              </button>
            </div>
          </div>
        </form>
      </>
    </section>
  );
};

export default CreatePost;
