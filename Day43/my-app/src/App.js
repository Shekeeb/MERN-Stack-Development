import React from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  const navigate = useNavigate()
  
  return (
    <div className="App">
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <br />
      <br />
      <button onClick={()=>navigate('/about')}>About</button>
      <button onClick={()=>navigate('/contact')}>Contact</button>

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;