const FormHeader = ({ title }) => {
  return (
    <>
      {' '}
      <h3 className="text-lg lg:text-2xl font-semibold">
        <span className=" text-2xl text-green-400">•</span> {title}
      </h3>
      <hr className="bg-orange-200 h-1" />
    </>
  );
};

export default FormHeader;
