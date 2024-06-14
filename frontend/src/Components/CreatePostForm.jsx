import Button from '././Button';
import FormHeader from './Forms/FormHeader';

const CreatePostForm = ({ postUpdate, handleUpdatePost, setPostUpdate }) => {
  return (
    <>
      <form
        action="/feed"
        encType="multipart/form-data"
        onSubmit={handleUpdatePost}
        className=" font-Inter w-[90%] md:w-[100%]  border-lightGray border-2 py-3 lg:py-6 px-2 lg:px-10 rounded-[10px] transition-all duration-1000 ease-in-out mx-auto"
      >
        <div className=" flex flex-col">
          <FormHeader title="Update Post" />

          <textarea
            name="post"
            cols="10"
            rows="1"
            value={postUpdate.title}
            className=" my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
            placeholder="Write you title"
            onChange={(e) =>
              setPostUpdate({ ...postUpdate, title: e.target.value })
            }
          />

          <textarea
            cols="10"
            rows="4"
            value={postUpdate.caption}
            className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-md text-darkGray text-[18px] focus:text-darkCharcoal resize-none"
            placeholder="Write you title"
            onChange={(e) =>
              setPostUpdate({ ...postUpdate, caption: e.target.value })
            }
          />
          <div className=" flex flex-col lg:flex-row justify-center py-2 ">
            <Button
              btnName="Post your thought"
              btnType="button"
              btnStyle="text-white hover:text-black font-semibold text-[17px] font-normal px-4 py-3  mt-6 md:mt-0 bg-secondary-3 hover:bg-background-1 rounded-lg border-none ml-auto"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
