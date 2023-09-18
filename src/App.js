// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:param' element={<Details />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
