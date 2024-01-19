import Feed from '../Pages/Feed';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';

export const navLinks = [
  {
    path: '/',
    name: 'Home',
    element: <Login />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: '/',
    name: 'Feed',
    element: <Feed />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: `/profile/:id`,
    name: 'Profile',
    element: <Profile />,
    isMenu: true,
    isPrivate: false,
  },
];
