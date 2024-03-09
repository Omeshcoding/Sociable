import { useState } from 'react';
import { CreatePost } from '../Components';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import { AuthData } from '../auth/AppWrapper';
import { PostData } from '../context/PostWrapper';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { user = {} } = AuthData() || {};
  const { allPosts = [] } = PostData() || [];

  const handleAddPosts = (newObject) => {
    postService.create(newObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
  };
  const sortPost =
    allPosts &&
    allPosts.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

  return (
    <>
      <main className="flex flex-col">
        <div className=" flex flex-col items-center w-[100%] lg:w-[80%] ml-auto ">
          <div className="mx-auto">
            <CreatePost addNewPost={handleAddPosts} />
            {sortPost &&
              sortPost.map((post) => {
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
