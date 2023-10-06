import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Uses from './components/Uses';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content-container'>
        <Home />
        <About />
        <Projects />
        <Uses />
      </div>
      <Footer />
    </div>
  );
}

export default App;
