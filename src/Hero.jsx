import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-gray-900/85 to-blue-900/80" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <span className="hero-badge inline-block text-xs font-semibold tracking-widest text-blue-300 uppercase mb-6 border border-blue-400/30 px-4 py-1.5 rounded-full">
            Expert QSE certifié ISO 9001 · 14001 · 45001
          </span>

          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Centre de Consultation pour la Mise en œuvre de Normes{' '}
            <span className="text-blue-400">
              Qualité, Sécurité et Environnementale (QSE)
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire expert pour exceller en Qualité, Sécurité et Environnement.
            Nous transformons les défis réglementaires en opportunités stratégiques pour votre entreprise.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center gap-2 group"
            >
              Contactez-nous
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary"
            >
              Découvrir nos services
            </button>
          </div>
        </div>

        {/* QSE Cards */}
        <div className="hero-cards mt-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { letter: 'Q', label: 'Qualité', iso: 'ISO 9001', color: '#2563EB', bg: 'rgba(37,99,235,0.15)' },
                { letter: 'S', label: 'Sécurité', iso: 'ISO 45001', color: '#DC2626', bg: 'rgba(220,38,38,0.15)' },
                { letter: 'E', label: 'Environnement', iso: 'ISO 14001', color: '#16A34A', bg: 'rgba(22,163,74,0.15)' },
              ].map((item) => (
                <div
                  key={item.letter}
                  className="text-center p-5 rounded-xl border border-white/10 hover:border-white/25 transition-colors duration-300"
                  style={{ backgroundColor: item.bg }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-white text-2xl font-bold">{item.letter}</span>
                  </div>
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.iso}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
