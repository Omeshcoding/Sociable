import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { Sidebar } from '../Components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
