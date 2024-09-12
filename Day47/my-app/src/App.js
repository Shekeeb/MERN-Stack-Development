import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

function App() {

  const {theme,toggleTheme}=useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Changer</h1>
      <p>Current theme:{theme}</p>
      <button onClick={toggleTheme}>{theme==="Light"?<FaMoon/>:<IoSunny/>}</button>
    </div>
  );
}

export default App;
