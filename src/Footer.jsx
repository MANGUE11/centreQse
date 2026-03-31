import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'importance', label: 'Importance QSE' },
    { id: 'normes', label: 'Normes ISO' },
    { id: 'services', label: 'Nos Services' },
    { id: 'temoignage', label: 'Témoignage' },
    { id: 'contact', label: 'Contact' },
  ];

  const normes = [
    'ISO 9001:2015 - Qualité',
    'ISO 14001:2015 - Environnement',
    'ISO 45001:2018 - Sécurité'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Centre QSE</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Votre partenaire expert pour exceller en Qualité, Sécurité et Environnement. 
              Nous transformons les défis réglementaires en opportunités stratégiques.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Normes */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nos certifications</h4>
            <ul className="space-y-2">
              {normes.map((norme, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-primary-400 mt-1">✓</span>
                  <span>{norme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+224664934035"
                className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <FiPhone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+224 664 93 40 35</span>
              </a>
              <a
                href="mailto:kourouma.aboubakr@gmail.com"
                className="flex items-start gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <FiMail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>kourouma.aboubakr@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Guinée, Conakry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Centre QSE. Tous droits réservés.
              </p>
              <div className="flex gap-6 text-sm">
                <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Mentions légales
                </button>
                <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Politique de confidentialité
                </button>
                <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  CGU
                </button>
              </div>
            </div>

            {/* Developer credit — centré */}
            <p className="text-gray-500 text-xs text-center">
              Développé par{' '}
              <a
                href="https://my-porfolio-lilac-theta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                MA-SY
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
