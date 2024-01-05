import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
import Register from './Components/Register';
import { jwtDecode } from 'jwt-decode';
import tokenCheck from './services/login';
import SharedLayout from './constants/SharedLayout';
import { useEffect, useState } from 'react';

const token = localStorage.getItem('loggedSociableappUser');
if (token) {
  const decodedToken = jwtDecode(token);
  if (tokenCheck.isTokenExpired(decodedToken)) {
    window.localStorage.removeItem('loggedSociableappUser');
  }
}
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout user={user} />}>
          <Route
            path="/feed"
            element={<Feed user={user} setUser={setUser} />}
          ></Route>
          <Route path="/profile" element={<Profile user={user} />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
