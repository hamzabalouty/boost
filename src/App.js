import React from 'react';
import './App.css';
import Arrowup from './components/Arrowup/Arrowup';
import Call from './components/Call/Call';
import Faqs from './components/Faqs/Faqs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Landing from './components/Landing/Landing';
import News from './components/News/News';
import Ourservices from './components/Ourservices/Ourservices';
import Vision from './components/Vision/Vision';

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Call />
      <Ourservices />
      <Vision />
      <Faqs />
      <Images />
      <News />
      <Arrowup />
      <Footer />
    </>
  )
}

export default App