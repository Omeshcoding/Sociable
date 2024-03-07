import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import tokenCheck from '../services/login';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = (user) => {
    setUser(user);
    if (user) {
      return navigate('/feed');
    }
  };
  const logout = () => {
    window.localStorage.removeItem('loggedSociableappUser');
    setUser(null);
    return navigate('/login');
  };
  const token = localStorage.getItem('loggedSociableappUser');

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const expiredTime = tokenCheck.isTokenExpired(decodedToken);
      if (expiredTime) {
        window.localStorage.removeItem('loggedSociableappUser');
        setUser(null);
        return navigate('/login');
      }
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
