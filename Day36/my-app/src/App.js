import './App.css';
import Home from './components/Home';
import Style from './components/Style';


const name="Shekeb"

function App() {
  return (
    <div className="App">
      <Home name={name} />
      <Style color={{color:"red"}} style={{backgroundColor:"grey"}}/>
    </div>
  );
}

export default App;
