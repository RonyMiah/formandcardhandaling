import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Cardinfo from './components/Cardinfo';
import Phone from './components/Phone';
import Code from './components/Code';
import Done from './components/Done';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route path="/card" element={<Cardinfo />} />
      <Route path="/phone" element={<Phone />} />
      <Route path="/otp" element={<Code />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
}

export default App;
