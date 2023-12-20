import Button from '././Button';
import FormHeader from './Forms/FormHeader';
import Textarea from './Forms/Textarea';

const CreatePostForm = () => {
  return (
    <>
      <form
        action="/upload"
        method="POST"
        encType="multipart/form-data"
        // onSubmit={handleAddPost}
        className=" font-Inter w-[90%] md:w-[100%]  border-lightGray border-2 py-3 lg:py-6 px-2 lg:px-10 rounded-[10px] transition-all duration-1000 ease-in-out mx-auto bg-amber-600"
      >
        <div className=" flex flex-col">
          <FormHeader title="Update Post" />
          <Textarea cols="10" rows="1" placeholder="Write you title" />
          <Textarea cols="10" rows="4" placeholder="Write you thoughts ..." />

          <div className=" flex flex-col lg:flex-row justify-center py-2 ">
            <Button
              btnName="Post your thought"
              btnType="submit"
              btnStyle="text-white text-[17px] font-normal px-4 py-3  mt-6 md:mt-0 bg-blue-600 hover:bg-blue-500 rounded-lg border-none ml-auto"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
