import { Sidebar, CreatePost } from '../Components';

import Posts from '../Components/Posts';
const Feed = () => {
  return (
    <>
      <header className="text-center ml-10 text-xl font-bold text-green-600 my-2">
        <h1>Sociable</h1>
      </header>
      <main className="w-full">
        <Sidebar />
        <CreatePost />
        <Posts />
        <Posts />
        <Posts />
      </main>
    </>
  );
};

export default Feed;
