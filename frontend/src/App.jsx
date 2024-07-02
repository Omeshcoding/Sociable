import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import SharedLayout from './constants/SharedLayout';
import Register from './Components/Register';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { PostWrapper } from './context/PostWrapper';
import { Suspense } from 'react';
import Loading from './Components/Loading';
import ScrollToTop from './constants/ScrolltoTop';

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
                <PostWrapper>
                  <ProtectedRoute>
                    <Feed />
                  </ProtectedRoute>
                </PostWrapper>
              }
            ></Route>
            <Route
              path="/profile/:id"
              element={
                <PostWrapper>
                  <ProtectedRoute>
                    <Suspense fallback={<Loading />}>
                      <ScrollToTop>
                        <Profile />
                      </ScrollToTop>
                    </Suspense>
                  </ProtectedRoute>
                </PostWrapper>
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
