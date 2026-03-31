import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ImportanceQSE from './ImportanceQSE';
import NormesISO from './NormesISO';
import Services from './Services';
import Temoignage from './Temoignage';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ImportanceQSE />
        <NormesISO />
        <Services />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
