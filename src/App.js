import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Uses from './components/Uses';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation();
  // console.log('langue :', i18n.language);
  // console.log('dir :', i18n.dir());

  return (
    <div className='App' dir={i18n.dir()}>
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
