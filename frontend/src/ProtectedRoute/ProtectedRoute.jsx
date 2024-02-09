import { Navigate } from 'react-router-dom';
import { AuthData } from '../auth/AppWrapper';

const ProtectedRoute = ({ children }) => {
  const { user = {} } = AuthData() || {};

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
