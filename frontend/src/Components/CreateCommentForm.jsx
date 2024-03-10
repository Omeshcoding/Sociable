import { useRef, useState } from 'react';
import { AuthData } from '../auth/AppWrapper';

const CreateCommentForm = ({ post, handleAddComment, isSubmitting }) => {
  const [comment, setComment] = useState('');
  const { user } = AuthData();
  const textAreaRef = useRef(null);

  const handleComment = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      user: user?.id,
    };
    handleAddComment(post.id, newComment);
    setComment('');
  };
  const handleCommentBoxSize = (value) => {
    setComment(value);
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };

  return (
    <form className="flex flex-col gap-2  rounded-xl" onSubmit={handleComment}>
      <textarea
        value={comment}
        onChange={(e) => handleCommentBoxSize(e.target.value)}
        ref={textAreaRef}
        required
        rows="1"
        className="w-full border-2 border-rose-200 resize-none outline-none px-3 py-3 rounded-xl overflow-hidden bg-gray-100"
        type="text"
      />
      <button
        type="submit"
        className="bg-secondary-3 hover:bg-background-1 duration-300 transition-all py-2 px-4 rounded-xl ml-auto scroll-hide text-lg shadow-sm font-semibold"
      >
        {isSubmitting ? 'Posting' : 'Post'}
      </button>
    </form>
  );
};

export default CreateCommentForm;
