import React from 'react'
import Hero from './components/Hero/Hero';
import './App.css';
import Popluar from './components/Popular/Popluar';
import Tools from './components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Hero />
      <Popluar />
      <Tools />
    </div>
  );
}

export default App;
