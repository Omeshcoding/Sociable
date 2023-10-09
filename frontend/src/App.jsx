import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login';
import Feed from './Pages/Feed';
function App() {
  console.log('hello world');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
