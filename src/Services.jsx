import { FiSearch, FiClipboard, FiUsers, FiFileText, FiCheckCircle, FiZap, FiFeather, FiShield } from 'react-icons/fi';
import Animate from './Animate';

const Services = () => {
  const services = [
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "Diagnostic Initial",
      description: "Évaluation personnalisée de votre situation actuelle et de vos besoins spécifiques en QSE.",
      accent: "#2563EB",
      light: "#EFF6FF",
    },
    {
      icon: <FiClipboard className="w-6 h-6" />,
      title: "Plan d'Action",
      description: "Élaboration d'un plan clair et adapté, avec des objectifs mesurables pour votre organisation.",
      accent: "#7C3AED",
      light: "#F5F3FF",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Formation et Sensibilisation",
      description: "Montée en compétences de vos équipes aux bonnes pratiques et aux exigences QSE.",
      accent: "#16A34A",
      light: "#F0FDF4",
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: "Assistance Documentaire",
      description: "Aide à la rédaction des procédures et à la mise en place des outils de suivi.",
      accent: "#EA580C",
      light: "#FFF7ED",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Préparation à la Certification",
      description: "Accompagnement complet pour l'audit et l'obtention de vos certifications QSE.",
      accent: "#0891B2",
      light: "#ECFEFF",
    }
  ];

  const avantages = [
    {
      title: "Expertise reconnue",
      description: "Une maîtrise approfondie des normes ISO et de la gestion intégrée QSE.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
      tag: "Savoir-faire",
      accent: "#2563EB"
    },
    {
      title: "Approche personnalisée",
      description: "Des solutions pragmatiques et adaptées aux besoins de toutes les tailles d'entreprises.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
      tag: "Sur-mesure",
      accent: "#7C3AED"
    },
    {
      title: "Outils numériques innovants",
      description: "Pour un suivi efficace, transparent et une gestion optimisée de vos projets QSE.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
      tag: "Innovation",
      accent: "#0891B2"
    },
    {
      title: "Accompagnement durable",
      description: "Vers la certification et l'amélioration continue, pour un impact à long terme.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80",
      tag: "Long terme",
      accent: "#16A34A"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">

        {/* Header */}
        <Animate variant="fadeUp">
          <div className="mb-20">
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Notre offre</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Accompagnement complet<br className="hidden sm:block" /> pour la mise en œuvre QSE
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl">
              Un parcours structuré pour transformer votre organisation
            </p>
          </div>
        </Animate>

        {/* Services — responsive grid */}
        <Animate variant="fadeUp" delay="0.1s">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-800 rounded-2xl overflow-hidden mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-950 p-8 xl:p-10 flex flex-col gap-5 hover:bg-gray-900 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-gray-500">0{index + 1}</span>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: service.light, color: service.accent }}
                >
                  {service.icon}
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-300 text-base leading-[1.9] flex-grow">
                {service.description}
              </p>

              <div
                className="h-px w-8 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: service.accent }}
              />
            </div>
          ))}
        </div>
        </Animate>

        {/* Pourquoi nous choisir */}
        <div className="pb-20">
          <Animate variant="fadeUp">
            <div className="mb-14">
              <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Nos atouts</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Pourquoi choisir notre Centre de Consultation QSE ?
              </h3>
            </div>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <Animate key={index} variant="fadeUp" delay={`${index * 0.1}s`}>
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={avantage.image}
                    alt={avantage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-sm font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: avantage.accent }}
                  >
                    {avantage.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{avantage.title}</h4>
                  <p className="text-base text-gray-200 leading-[1.9]">{avantage.description}</p>
                  <div
                    className="mt-5 h-0.5 w-8 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: avantage.accent }}
                  />
                </div>
              </div>
              </Animate>
            ))}
          </div>
        </div>

      </div>

      {/* Écoconception — full-width parallax */}
      <div
        className="relative w-full mt-8 py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <Animate variant="fadeLeft">
            <div>
              <span className="text-sm font-semibold tracking-widest text-green-400 uppercase">Responsabilité numérique</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-8 leading-tight">
                L'écoconception numérique au service de votre site QSE
              </h3>
              <p className="text-gray-100 text-lg leading-[1.9] mb-6">
                Nous appliquons les principes du Référentiel Général d'Écoconception de Services
                Numériques (RGESN) pour créer un site web QSE performant, responsable et respectueux
                de l'environnement.
              </p>
              <p className="text-gray-100 text-lg leading-[1.9]">
                En réduisant l'empreinte carbone numérique, nous garantissons une expérience
                utilisateur optimale et valorisons votre engagement environnemental auprès de
                toutes vos parties prenantes.
              </p>
            </div>
            </Animate>

            <Animate variant="fadeRight" delay="0.15s">
            <div className="flex flex-col gap-5">
              {[
                { label: "Performance optimale",      desc: "Temps de chargement réduits, expérience fluide sur tous les appareils.", icon: <FiZap className="w-6 h-6" />,    color: "#FACC15" },
                { label: "Empreinte carbone réduite", desc: "Architecture légère et hébergement vert pour minimiser l'impact CO₂.",   icon: <FiFeather className="w-6 h-6" />, color: "#4ADE80" },
                { label: "Conformité RGESN",          desc: "Respect du Référentiel Général d'Écoconception de Services Numériques.", icon: <FiShield className="w-6 h-6" />, color: "#60A5FA" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${item.color}22`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{item.label}</p>
                    <p className="text-gray-100 text-base mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </Animate>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
