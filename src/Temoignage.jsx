import React from 'react';
import { FiStar } from 'react-icons/fi';

const Temoignage = () => {
  return (
    <section id="temoignage" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Témoignage client : Une PME transformée par le QSE
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Des résultats concrets et mesurables
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Quote Icon */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-center">
              <div className="inline-block bg-white/20 rounded-full p-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                "Grâce à l'accompagnement du Centre, notre PME du secteur agroalimentaire a réduit 
                ses non-conformités de <span className="font-bold text-primary-600">25 % en 12 mois</span>. 
                La formation sécurité a considérablement amélioré le climat social, et nous avons obtenu 
                les certifications <span className="font-bold text-green-600">ISO 9001</span> et{' '}
                <span className="font-bold text-green-600">ISO 14001</span> en moins d'un an. 
                Une transformation réussie !"
              </p>

              <div className="text-center">
                <p className="font-bold text-gray-800 text-lg">Directeur Qualité</p>
                <p className="text-gray-600">PME Agroalimentaire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">25%</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Réduction</h4>
              <p className="text-gray-600">des non-conformités en 12 mois</p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Certifications</h4>
              <p className="text-gray-600">ISO 9001 & ISO 14001 obtenues</p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">&lt;1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Délai</h4>
              <p className="text-gray-600">an pour la certification complète</p>
            </div>
          </div>
        </div>

        {/* Visual Representation */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Rejoignez nos clients satisfaits</h3>
            <p className="text-lg mb-6">
              Des entreprises de toutes tailles nous font confiance pour leur transformation QSE
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-bold">PME</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-bold">Grandes Entreprises</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-bold">Startups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Temoignage;
