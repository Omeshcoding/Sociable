import { Sidebar, CreatePost } from '../Components';
import Header from '../Components/Header';
import Posts from '../Components/Posts';

const Feed = () => {
  return (
    <>
      <Header />
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
