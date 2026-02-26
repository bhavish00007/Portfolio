// Core imports
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AISolutions from './components/AISolutions';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App - Main portfolio application
 * Renders all sections in optimal order with clean modular architecture
 */
function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISolutions />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
