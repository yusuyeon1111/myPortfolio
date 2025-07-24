import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Home/>
      <p id='about-p'>ABOUT ME</p>
      <About/>
    </div>
  );
}

export default App;
