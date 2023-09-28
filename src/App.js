import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content-container'>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
