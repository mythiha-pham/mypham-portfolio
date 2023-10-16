import Navbar from './components/Navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import About from './components/About/about.js';
import Experience from './components/Experience/exp.js';
import Projects from './components/Projects/projects.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

