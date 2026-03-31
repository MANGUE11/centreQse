import Header from './Header';
import Hero from './Hero';
import APropos from './APropos';
import ImportanceQSE from './ImportanceQSE';
import NormesISO from './NormesISO';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <APropos />
        <ImportanceQSE />
        <NormesISO />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
