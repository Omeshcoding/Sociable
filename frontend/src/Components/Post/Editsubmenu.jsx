import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

const Editsubmenu = ({ handleShow, toggleModal }) => {
  return (
    <div
      className="absolute rounded-md top-8 right-1 flex flex-col gap-4 bg-white/80 shadow-sm px-4 py-3 font-semibold "
      onMouseLeave={() => handleShow()}
    >
      <button
        type="button"
        className="flex hover:text-green-500  items-center gap-2"
        onClick={() => toggleModal('edit')}
      >
        <CiEdit /> Edit
      </button>

      <button
        type="button"
        onClick={() => toggleModal('delete')}
        className="flex hover:text-rose-600 items-center gap-2"
      >
        <MdDelete /> Delete
      </button>
    </div>
  );
};

export default Editsubmenu;
