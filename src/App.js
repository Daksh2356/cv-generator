import { Route, Routes } from 'react-router-dom';
import './App.css';
import CV from './pages/CV';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<CV/>} />
        <Route path="/admin" element={<AdminPage/>} />
    </Routes>
    
    </>
  );
}

export default App;