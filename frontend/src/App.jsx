import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AppWrapper';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>
  );
}

export default App;
