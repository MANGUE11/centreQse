import React from 'react';
import { FiAward, FiHeart } from 'react-icons/fi';
import { IoLeafOutline } from 'react-icons/io5';

const NormesISO = () => {
  const normes = [
    {
      icon: <FiAward className="w-10 h-10" />,
      title: "ISO 9001 : 2015",
      subtitle: "Management de la qualité",
      description: "Centré sur la satisfaction client et l'amélioration continue des processus.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: <IoLeafOutline className="w-10 h-10" />,
      title: "ISO 14001 : 2015",
      subtitle: "Management environnemental",
      description: "Pour réduire l'impact écologique et assurer le respect de la réglementation.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: <FiHeart className="w-10 h-10" />,
      title: "ISO 45001 : 2018",
      subtitle: "Santé et sécurité au travail",
      description: "Pour protéger les collaborateurs et prévenir les risques professionnels.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    }
  ];

  return (
    <section id="normes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Les trois piliers fondamentaux du QSE
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            ISO 9001, ISO 14001 et ISO 45001
          </p>
        </div>

        {/* Normes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {normes.map((norme, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 bg-gradient-to-r ${norme.color}`}></div>
              
              <div className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${norme.color} rounded-full flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                  {norme.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {norme.title}
                </h3>
                
                <p className="text-primary-600 font-semibold mb-4 text-center">
                  {norme.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {norme.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interconnection Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              L'interconnexion des normes QSE
            </h3>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Central Circle */}
                <div className="w-full md:w-auto flex justify-center mb-8 md:mb-0">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <p className="text-xl font-bold">Système de</p>
                        <p className="text-xl font-bold">Management</p>
                        <p className="text-xl font-bold">Intégré</p>
                      </div>
                    </div>
                    
                    {/* Orbiting elements for desktop */}
                    <div className="hidden md:block">
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <span className="text-sm">ISO<br/>9001</span>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <span className="text-sm">ISO<br/>14001</span>
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <span className="text-sm">ISO<br/>45001</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile view - stacked */}
                <div className="md:hidden flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      <span className="text-xs">ISO<br/>9001</span>
                    </div>
                    <p className="text-sm text-gray-700">Qualité et amélioration continue</p>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      <span className="text-xs">ISO<br/>14001</span>
                    </div>
                    <p className="text-sm text-gray-700">Environnement et prévention</p>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      <span className="text-xs">ISO<br/>45001</span>
                    </div>
                    <p className="text-sm text-gray-700">Santé et sécurité au travail</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-center mt-8 leading-relaxed">
                Les normes ISO 9001, 14001 et 45001 ne sont pas isolées. Elles convergent pour créer 
                un système de management QSE unifié et cohérent.
              </p>
            </div>
          </div>

          {/* SMI Section */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Qu'est-ce qu'un Système de Management Intégré QSE (SMI) ?
            </h3>
            
            <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Un Système de Management Intégré (SMI) QSE fusionne harmonieusement les exigences 
              qualité, sécurité et environnement. Cette approche globale permet d'optimiser les 
              processus, de réduire les coûts et d'améliorer la coordination interne de votre entreprise.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg italic text-center">
                "Par exemple, une entreprise industrielle a pu réduire ses incidents de 30 % et 
                diminuer ses déchets grâce à la mise en œuvre de notre SMI."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NormesISO;
