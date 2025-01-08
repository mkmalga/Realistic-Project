/*import React from 'react';*/
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import CompletedProjects from './components/CompletedProjects';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppChat from './components/WhatsappChat';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Properties />
      <CompletedProjects />
      <About />
      <Contact />
      <WhatsAppChat />
    </div>
  );
}

export default App;