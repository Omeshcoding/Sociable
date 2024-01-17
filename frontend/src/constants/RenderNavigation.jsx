import { Routes, Route } from 'react-router-dom';
import { AuthData } from '../auth/AppWrapper';
import Feed from '../Pages/Feed';
import Profile from '../Pages/Profile';
import Register from '../Components/Register';
import Login from '../Pages/Login';
export const RenderRoutes = () => {
  const { user, setUser } = AuthData();

  return (
    <Routes>
      <Route
        path="/feed"
        element={<Feed user={user} setUser={setUser} />}
      ></Route>
      <Route path="/profile/:id" element={<Profile user={user} />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login setUser={setUser} />}></Route>
    </Routes>
  );
};
