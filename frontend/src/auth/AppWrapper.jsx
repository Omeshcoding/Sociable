import { createContext, useContext, useEffect, useState } from 'react';
import { RenderRoutes } from '../constants/RenderNavigation';
import { jwtDecode } from 'jwt-decode';
import tokenCheck from '../services/login';
import { useNavigate } from 'react-router-dom';
import SharedLayout from '../constants/SharedLayout';
const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('loggedSociableappUser');

  if (token) {
    const decodedToken = jwtDecode(token);
    const expiredTime = tokenCheck.isTokenExpired(decodedToken);

    if (expiredTime) {
      window.localStorage.removeItem('loggedSociableappUser');
      navigate('/login');
    }
  }
  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <>
        <SharedLayout />

        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
