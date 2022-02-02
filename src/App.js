import React from 'react'
import Hero from './components/Hero/Hero';
import './App.css';
import Popluar from './components/Popular/Popluar';
import Tools from './components/Tools/Tools';
import Contributor from './components/Contributor/Contributor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <main>
        <Popluar />
        <Tools />
        <Contributor />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
