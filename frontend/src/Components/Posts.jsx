import Post from './Post';

const Posts = ({ post }) => {
  return (
    <section className="mt-10 mx-auto ">
      <Post post={post} />
    </section>
  );
};

export default Posts;
