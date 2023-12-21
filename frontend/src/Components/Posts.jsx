import Post from './Post';

const Posts = ({ post, user }) => {
  return (
    <section className="mt-10 mx-auto ">
      <Post posts={post} user={user} />
    </section>
  );
};

export default Posts;
