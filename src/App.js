import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className='home-wrapper'>
        <Home/>
      </div>
      <About/>
    </div>
  );
}

export default App;
