import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  console.log('hello world');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
