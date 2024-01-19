import { createContext, useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Sidebar } from '../Components';
import { RenderRoutes } from '../constants/RenderNavigation';
import { jwtDecode } from 'jwt-decode';
import tokenCheck from '../services/login';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);
const token = localStorage.getItem('loggedSociableappUser');

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(
    tokenCheck.isTokenExpired(decodedToken),
    decodedToken.iat - decodedToken.exp
  );
  if (decodedToken.iat < decodedToken.exp) {
    window.localStorage.removeItem('loggedSociableappUser');
  }
  // <Feed />;
}
export const AuthWrapper = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    }
  }, []);
  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [navigate, user]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <>
        <Header />
        <Sidebar />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
