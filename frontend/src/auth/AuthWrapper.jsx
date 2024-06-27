import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import tokenCheck from '../services/login';
import { useNavigate } from 'react-router-dom';
import postService from '../services/posts';

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (user) => {
    setUser(user);

    if (user) {
      navigate('/feed');
    }
  };
  const logout = () => {
    window.localStorage.removeItem('loggedSociableappUser');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('loggedSociableappUser');
    const user = JSON.parse(token);
    setUser(user);
    postService.setToken(user?.token);
    if (token) {
      const decodedToken = jwtDecode(token);
      const expiredTime = tokenCheck.isTokenExpired(decodedToken);
      if (expiredTime) {
        window.localStorage.removeItem('loggedSociableappUser');
        setUser(null);
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, login, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
