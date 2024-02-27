import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = window.localStorage.getItem('loggedSociableappUser');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
