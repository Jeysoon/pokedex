import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;