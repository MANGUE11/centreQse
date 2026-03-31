import React from 'react';
import { FiSearch, FiClipboard, FiUsers, FiFileText, FiCheckCircle } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Diagnostic Initial",
      description: "Évaluation personnalisée de votre situation actuelle et de vos besoins spécifiques en QSE.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiClipboard className="w-8 h-8" />,
      title: "Plan d'Action",
      description: "Élaboration d'un plan clair et adapté, avec des objectifs mesurables pour votre organisation.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Formation et Sensibilisation",
      description: "Montée en compétences de vos équipes aux bonnes pratiques et aux exigences QSE.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Assistance Documentaire",
      description: "Aide à la rédaction des procédures et à la mise en place des outils de suivi.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Préparation à la Certification",
      description: "Accompagnement complet pour l'audit et l'obtention de vos certifications QSE.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const avantages = [
    {
      title: "Expertise reconnue",
      description: "Une maîtrise approfondie des normes ISO et de la gestion intégrée QSE.",
      icon: "🎓"
    },
    {
      title: "Approche personnalisée",
      description: "Des solutions pragmatiques et adaptées aux besoins de toutes les tailles d'entreprises.",
      icon: "🎯"
    },
    {
      title: "Outils numériques innovants",
      description: "Pour un suivi efficace, transparent et une gestion optimisée de vos projets QSE.",
      icon: "💻"
    },
    {
      title: "Accompagnement durable",
      description: "Vers la certification et l'amélioration continue, pour un impact à long terme.",
      icon: "🌱"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Notre offre : Accompagnement complet pour la mise en œuvre QSE
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Un parcours structuré pour transformer votre organisation
          </p>
        </div>

        {/* Services Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Pourquoi choisir notre Centre de Consultation QSE ?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {avantages.map((avantage, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {avantage.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {avantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {avantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Écoconception Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  L'écoconception numérique au service de votre site QSE
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous appliquons les principes du Référentiel Général d'Écoconception de Services 
                  Numériques (RGESN) pour créer un site web QSE performant, responsable et respectueux 
                  de l'environnement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  En réduisant l'empreinte carbone numérique, nous garantissons une expérience 
                  utilisateur optimale et valorisons votre engagement environnemental auprès de 
                  toutes vos parties prenantes.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="text-gray-700 font-medium">Performance optimale</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="text-gray-700 font-medium">Empreinte carbone réduite</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="text-gray-700 font-medium">Conformité RGESN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
