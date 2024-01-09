import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { Sidebar } from '../Components';

const SharedLayout = ({ user, setUser }) => {
  return (
    <>
      <Header name={user?.name} />
      {user && <Sidebar setUser={setUser} id={user?.id} />}
      <Outlet />
    </>
  );
};

export default SharedLayout;
