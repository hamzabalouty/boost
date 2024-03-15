import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arrowup from './components/Arrowup/Arrowup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Testimonials from './pages/Testimonials/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
      </Routes>
      <Arrowup />
      <Footer />
    </BrowserRouter>
  )
}

export default App