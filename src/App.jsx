import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Cardinfo from './components/Cardinfo';
import Phone from './components/Phone';
import Code from './components/Code';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route path="/card" element={<Cardinfo />} />
      <Route path="/phone" element={<Phone />} />
      <Route path="/otp" element={<Code />} />
    </Routes>
  );
}

export default App;
