import { FiArrowRight } from 'react-icons/fi';
import Animate from './Animate';

const APropos = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image */}
          <Animate variant="fadeLeft">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-blue-600/10 border border-blue-100" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
                alt="Consultant QSE"
                className="relative z-10 w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute z-20 bottom-6 -right-3 sm:-right-5 bg-white border border-gray-100 shadow-lg rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">QSE</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">+15 ans d'expérience</p>
                  <p className="text-xs text-gray-400">Expert certifié ISO</p>
                </div>
              </div>
            </div>
          </Animate>

          {/* Right — text */}
          <Animate variant="fadeRight" delay="0.15s">
            <div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">À propos</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 mt-3 mb-8 leading-tight">
                Un expert à vos côtés pour chaque étape de votre démarche QSE
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-[1.9]">
                <p>
                  Fort de plus de 15 ans d'expérience dans le domaine de la Qualité, Sécurité et
                  Environnement, notre Centre de Consultation accompagne les entreprises de toutes
                  tailles dans la mise en œuvre et la certification de leurs systèmes de management
                  intégré (SMI).
                </p>
                <p>
                  Notre approche repose sur une méthode rigoureuse et personnalisée : nous analysons
                  votre contexte, vos risques et vos opportunités pour co-construire avec vos équipes
                  des solutions durables, conformes aux normes ISO 9001, ISO 14001 et ISO 45001.
                </p>
                <p>
                  Nous croyons que la conformité réglementaire n'est pas une fin en soi, mais un
                  tremplin vers l'excellence opérationnelle. Notre engagement : vous accompagner bien
                  au-delà de la certification, pour ancrer une culture QSE pérenne au cœur de votre
                  organisation.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-10 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-4 rounded-xl text-lg hover:bg-blue-700 transition-colors duration-300 group"
              >
                Nous contacter
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Animate>

        </div>
      </div>
    </section>
  );
};

export default APropos;
