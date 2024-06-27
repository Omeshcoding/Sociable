import { useEffect, useState } from 'react';
import { CreatePost } from '../Components';
import Posts from '../Components/Posts';
import postService from '../services/posts';
import { AuthData } from '../auth/AuthWrapper';
import { PostData } from '../context/PostWrapper';

import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Feed = () => {
  const { user = {} } = AuthData() || {};
  const { allPosts = [] } = PostData() || [];
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState([]);

  const handleAddPosts = (newObject) => {
    postService.create(newObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
    });
  };
  const fetchUsers = async () => {
    postService.getUser().then((returnedPost) => setUsers(returnedPost));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <main className="flex flex-col lg:overflow-hidden">
        <div className=" flex flex-row w-[100%] lg:w-[80%] ml-auto ">
          <div className="mx-auto ">
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
          <div className="w-[240px] max-lg:hidden" />
          <button
            type="button"
            className={`fixed top-[8px] max-lg:block hidden right-4  h-8 text-xl  bg-secondary-3  px-4 mt-3 mx-auto  rounded-md text-background-3 font-semibold z-50 `}
            onClick={() => setShow(!show)}
          >
            <FaUsers />
          </button>

          <div
            className={`${
              show && 'translate-x-80'
            } fixed transition-all duration-300 lg:translate-x-0 right-0 bg-secondary-3 border-2 border-gray-100 px-10 w-[250px] text-center pt-6 lg:pt-20 overflow-y-scroll h-[100vh] z-10
            `}
            onMouseLeave={() => setShow(!show)}
          >
            <div className=" ">
              <h4 className="font-bold bg-background-3 text-center rounded-md py-1 text-white w-full text-xl mb-12 ">
                Users
              </h4>
              <div className="flex flex-col pl-12">
                {users?.map((user) => {
                  return (
                    <Link
                      to={`/profile/${user?.id}`}
                      key={user?.id}
                      className="mt-4 text-background-3 font-semibold capitalize text-left cursor-pointer"
                    >
                      {user?.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
