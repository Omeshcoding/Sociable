import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
