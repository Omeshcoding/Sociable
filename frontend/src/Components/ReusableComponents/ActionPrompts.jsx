const ActionPrompts = ({ type, toggleModal, handleDeleteItem, id, title }) => {
  return (
    <div className="absolute md:left-[-70px] bg-white w-[100%] md:w-[600px] h-[150px] top-40 mx-auto py-4 px-2 rounded-md shadow-md text-center text-xl font-semibold">
      <h4>Do you want to Delete this {type} ?</h4>
      <div className="flex w-[70%] md:w-[50%] mx-auto justify-between sm:px-5 mt-4 sm:mt-10">
        <button
          type="button"
          onClick={() => handleDeleteItem(id, title)}
          className="text-rose-500 border-rose-300 border-2 px-4 rounded-md drop-shadow-lg hover:border-rose-500 transition-all duration-400"
        >
          Yes
        </button>
        <button
          type="button"
          className="text-green-500 border-green-300 border-2 px-6 rounded-md drop-shadow-lg hover:border-green-500 py-1 transition-all duration-400"
          onClick={() => toggleModal('delete')}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ActionPrompts;
