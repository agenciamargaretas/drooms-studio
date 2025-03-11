import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Salas from '../components/Salas';
import Agenda from '../components/Agenda';
import Sobre from '../components/Sobre';
import Parceiros from '../components/Parceiros';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Salas />
      <Agenda />
      <Sobre />
      <Parceiros />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default LandingPage; 