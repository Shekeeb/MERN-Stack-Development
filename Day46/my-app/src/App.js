import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import AppContext from './AppContext';

function App() {

  const navigate = useNavigate()

  return (
    <AppContext.Provider value={{ data: 10 }}>

      <div className="App">
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>

    </AppContext.Provider>

  );
}

export default App;
