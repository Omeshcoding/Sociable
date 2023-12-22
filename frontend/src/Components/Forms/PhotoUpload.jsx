const PhotoUpload = ({ type, name }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="text-black text-[17px] font-normal px-2  bg-transparent rounded-lg border-gray-200 border-2 py-3 lg:py-1 my-b  lg:my-1  "
      />
    </>
  );
};

export default PhotoUpload;
