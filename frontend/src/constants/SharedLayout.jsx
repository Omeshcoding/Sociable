import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { Sidebar } from '../Components';
import { AuthData } from '../auth/AppWrapper';

const SharedLayout = () => {
  const { user = {} } = AuthData() || {};
  return (
    <>
      <Header />
      {user && <Sidebar />}
      <Outlet />
    </>
  );
};

export default SharedLayout;
