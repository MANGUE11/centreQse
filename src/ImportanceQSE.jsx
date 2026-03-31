import React from 'react';
import { FiShield, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';

const ImportanceQSE = () => {
  const points = [
    {
      icon: <FiAlertCircle className="w-8 h-8" />,
      title: "Prévention des accidents",
      description: "Plus de 600 000 accidents du travail sont recensés chaque année en France, soulignant l'urgence d'une gestion proactive de la sécurité au travail.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Pression réglementaire et sociétale",
      description: "Les entreprises doivent intégrer la qualité, la sécurité et l'environnement pour répondre aux exigences légales et aux attentes croissantes des consommateurs et des parties prenantes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Levier stratégique",
      description: "La QSE n'est pas une contrainte, mais un avantage concurrentiel. Elle améliore la performance globale, réduit les coûts et renforce l'image de marque.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="importance" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Pourquoi la démarche QSE est-elle essentielle aujourd'hui ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index}
              className="card animate-slide-up hover:transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-lg flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                {point.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {point.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                600K+
              </div>
              <p className="text-gray-700 font-medium">Accidents du travail/an</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                30%
              </div>
              <p className="text-gray-700 font-medium">Réduction des incidents</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                100%
              </div>
              <p className="text-gray-700 font-medium">Conformité réglementaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceQSE;
