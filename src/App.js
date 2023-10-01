import React from 'react'
import Datos from './components/datos/Datos';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Datos />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
