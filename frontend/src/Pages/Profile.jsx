import { CreatePost } from '../Components';
import abstract from '../assets/abstract.jpg';
import { useParams } from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper';
import { PostData } from '../context/PostWrapper';
import Loading from '../Components/Loaders/Loading';
import { Suspense, lazy } from 'react';

const Post = lazy(() => import('../Components/Post'));
const Profile = () => {
  const { user = {} } = AuthData() || {};
  const { allPosts = [] } = PostData() || [];
  const id = useParams().id;

  const singlePost = allPosts.filter((post) => post?.user?.id === id);
  return (
    <>
      <div className="flex flex-col">
        <div className=" flex flex-col items-center lg:w-[80%] lg:ml-auto ">
          <div className=" bg-gradient-to-br from-[#63615f] to-[#FB8500] opacity-80 backdrop-blur-lg  w-[90%] h-[300px] ml-0 flex flex-col mt-5 rounded-2xl items-start justify-center px-10 text-white">
            <h5 className="font-semibold text-xl ml-2">Profile</h5>
            <div className="flex items-center mt-6">
              <img
                src={abstract}
                alt="profilepic"
                className="w-[100px] backdrop-blur-lg  shadow-xl rounded-full h-[100px]"
              />
              <div>
                <p className=" ml-4 capitalize font-bold">
                  {singlePost[0]?.user?.name}
                </p>
                <p className="ml-4 font-bold">{singlePost[0]?.user?.email}</p>
              </div>
            </div>
          </div>
          <div
            className={`mx-auto  lg:mb-5 ${
              user?.id !== id ? 'my-24' : 'mb-20'
            }`}
          >
            {user?.id === id && <CreatePost />}
            {singlePost?.length === 0 ? (
              <p className="my-10 text-center text-2xl font-semibold border-secondary-3 border-2 py-1 rounded-md">
                No post Here
              </p>
            ) : (
              singlePost &&
              singlePost?.map((post) => {
                return (
                  <Suspense fallback={<Loading />}>
                    <div key={post?.id}>
                      <Post posts={post} user={user} />
                    </div>
                  </Suspense>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
