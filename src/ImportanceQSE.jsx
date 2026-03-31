import { FiShield, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';
import Animate from './Animate';

const ImportanceQSE = () => {
  const points = [
    {
      icon: <FiAlertCircle className="w-6 h-6" />,
      title: "Prévention des accidents",
      description: "Plus de 600 000 accidents du travail sont recensés chaque année en France, soulignant l'urgence d'une gestion proactive de la sécurité au travail.",
      accent: "#DC2626", light: "#FEF2F2", tag: "Sécurité",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Pression réglementaire et sociétale",
      description: "Les entreprises doivent intégrer la qualité, la sécurité et l'environnement pour répondre aux exigences légales et aux attentes croissantes des consommateurs.",
      accent: "#2563EB", light: "#EFF6FF", tag: "Conformité",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Levier stratégique",
      description: "La QSE n'est pas une contrainte, mais un avantage concurrentiel. Elle améliore la performance globale, réduit les coûts et renforce l'image de marque.",
      accent: "#16A34A", light: "#F0FDF4", tag: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80"
    }
  ];

  const stats = [
    { value: "600K+", label: "Accidents du travail/an",  color: "#DC2626" },
    { value: "30%",   label: "Réduction des incidents",  color: "#16A34A" },
    { value: "100%",  label: "Conformité réglementaire", color: "#2563EB" },
  ];

  return (
    <section id="importance" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">

        <Animate variant="fadeUp">
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Enjeux actuels</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 mt-3 max-w-3xl leading-tight">
              Pourquoi la démarche QSE est-elle essentielle aujourd'hui ?
            </h2>
          </div>
        </Animate>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <Animate key={index} variant="fadeUp" delay={`${index * 0.12}s`}>
              <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-sm font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: point.accent }}
                  >
                    {point.tag}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: point.light, color: point.accent }}
                    >
                      {point.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{point.title}</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-[1.9]">{point.description}</p>
                  <div
                    className="mt-6 h-0.5 w-10 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: point.accent }}
                  />
                </div>
              </div>
            </Animate>
          ))}
        </div>

        <Animate variant="fadeUp" delay="0.1s">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 bg-gray-50 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-12 px-8 text-center">
                <span className="text-5xl xl:text-6xl font-bold tracking-tight mb-3" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <p className="text-base text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Animate>

      </div>
    </section>
  );
};

export default ImportanceQSE;
