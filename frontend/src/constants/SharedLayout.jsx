import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { Sidebar } from '../Components';

const SharedLayout = ({ user }) => {
  return (
    <>
      <Header name={user?.name} />
      {user && <Sidebar />}
      <Outlet />
    </>
  );
};

export default SharedLayout;
