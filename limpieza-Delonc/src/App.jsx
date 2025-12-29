import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative">
      <main>
        <Hero />
        <Services />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;