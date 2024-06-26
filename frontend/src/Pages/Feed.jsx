import { useState } from 'react';
import { CreatePost } from '../Components';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import { AuthData } from '../auth/AuthWrapper';
import { PostData } from '../context/PostWrapper';
import Loading from '../Components/Loading';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { user = {} } = AuthData() || {};
  const { allPosts = [], isSubmitting } = PostData() || [];

  const handleAddPosts = (newObject) => {
    postService.create(newObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
  };

  if (isSubmitting) {
    return <Loading />;
  }
  return (
    <>
      <main className="flex flex-col">
        <div className=" flex flex-col items-center w-[100%] lg:w-[80%] ml-auto ">
          <div className="mx-auto">
            <CreatePost addNewPost={handleAddPosts} />
            {allPosts &&
              allPosts?.map((post) => {
                return (
                  <div key={post.id}>
                    <Posts post={post} user={user} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
