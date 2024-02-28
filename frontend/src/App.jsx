import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthWrapper } from './auth/AppWrapper';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import SharedLayout from './constants/SharedLayout';
import Register from './Components/Register';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
