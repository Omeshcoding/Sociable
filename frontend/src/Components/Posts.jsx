import Post from './Post';

const Posts = ({ post, user }) => {
  return (
    <section className="mt-10 mx-auto ">
      <Post post={post} user={user} />
    </section>
  );
};

export default Posts;
