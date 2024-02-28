import { Routes, Route } from 'react-router-dom';
import Feed from '../Pages/Feed';
import Profile from '../Pages/Profile';
import Register from '../Components/Register';
import Login from '../Pages/Login';
export const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/profile/:id" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
