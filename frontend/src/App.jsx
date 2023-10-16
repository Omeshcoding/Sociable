import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
import Register from './Components/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
