import React from 'react';
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
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Centre de Consultation pour la Mise en œuvre de Normes{' '}
            <span className="text-primary-600">
              Qualité, Sécurité et Environnementale (QSE)
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire expert pour exceller en Qualité, Sécurité et Environnement. 
            Nous transformons les défis réglementaires en opportunités stratégiques pour votre entreprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Visual illustration */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">Q</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Qualité</h3>
                  <p className="text-sm text-gray-600 mt-2">ISO 9001</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Sécurité</h3>
                  <p className="text-sm text-gray-600 mt-2">ISO 45001</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Environnement</h3>
                  <p className="text-sm text-gray-600 mt-2">ISO 14001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
