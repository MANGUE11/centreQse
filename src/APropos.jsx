import { FiArrowRight, FiAward, FiBookOpen, FiBriefcase, FiPhone, FiMail } from 'react-icons/fi';
import Animate from './Animate';

const APropos = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { icon: <FiAward className="w-4 h-4" />, label: "Ingénieur QSE" },
    { icon: <FiBookOpen className="w-4 h-4" />, label: "ISO 9001 · 14001 · 45001" },
    { icon: <FiBriefcase className="w-4 h-4" />, label: "3 ans d'expérience" },
  ];

  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo */}
          <Animate variant="fadeLeft">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-blue-600/10 border border-blue-100" />
              <img
                src="/images/photo.jpeg"
                alt="Bakary KOUROUMA — Consultant QSE"
                className="relative z-10 w-full h-[480px] sm:h-[560px] object-cover object-top rounded-2xl shadow-xl"
              />
              {/* Badge flottant */}
              <div className="absolute z-20 bottom-6 -right-3 sm:-right-5 bg-white border border-gray-100 shadow-lg rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">QSE</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">NIANDAN GROUP</p>
                  <p className="text-xs text-gray-400">Responsable QHSE</p>
                </div>
              </div>
            </div>
          </Animate>

          {/* Right — texte */}
          <Animate variant="fadeRight" delay="0.15s">
            <div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">À propos</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 mt-3 mb-2 leading-tight">
                Bakary KOUROUMA
              </h2>
              <p className="text-blue-600 font-semibold text-lg mb-8">
                Ingénieur QSE — Agent du Développement Communautaire
              </p>

              {/* Badges compétences */}
              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>

              <div className="space-y-5 text-gray-700 text-lg leading-[1.9]">
                <p>
                  Diplômé en QHSE Professionnel au Maroc et en Sociologie du Développement
                  Communautaire en Guinée, Bakary KOUROUMA est Responsable QHSE de NIANDAN GROUP
                  depuis décembre 2025.
                </p>
                <p>
                  Consultant SST / HSE motivé et rigoureux, il dispose d'une maîtrise approfondie
                  des référentiels ISO 9001, ISO 14001 et ISO 45001, ainsi que des outils de
                  résolution de problèmes : QQOQCCP, SWOT, 5M, 5 Pourquoi, PDCA.
                </p>
                <p>
                  Fort de trois ans d'expérience dans la mise en place de programmes QSE, il
                  accompagne les entreprises dans leur démarche d'amélioration continue, de
                  conformité réglementaire et de performance globale.
                </p>
              </div>

              {/* Coordonnées */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+224625050708"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base font-medium"
                >
                  <FiPhone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  +224 625 050 708
                </a>
                <a
                  href="mailto:kourouma.aboubakr@gmail.com"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base font-medium"
                >
                  <FiMail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  kourouma.aboubakr@gmail.com
                </a>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-4 rounded-xl text-lg hover:bg-blue-700 transition-colors duration-300 group"
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
