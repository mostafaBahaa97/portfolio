import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero';
import About from './component/About';
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import Services from './component/Services';
function App() {

  return (
    <>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Services />
    <Footer/>
      
    </>
  )
}

export default App
