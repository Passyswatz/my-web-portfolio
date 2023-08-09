import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <>
 <Navbar/>
 <Home/>
 <About/>
 <Portfolio/>
 <Experience/>
 <Contact/>
<SocialLinks/>
    </>
  );
}

export default App;
