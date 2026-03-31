import { FiAward, FiHeart } from 'react-icons/fi';
import { IoLeafOutline } from 'react-icons/io5';
import Animate from './Animate';

const NormesISO = () => {
  const normes = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "ISO 9001 : 2015",
      subtitle: "Management de la qualité",
      description: "Centré sur la satisfaction client et l'amélioration continue des processus.",
      accent: "#2563EB", light: "#EFF6FF", tag: "Qualité"
    },
    {
      icon: <IoLeafOutline className="w-6 h-6" />,
      title: "ISO 14001 : 2015",
      subtitle: "Management environnemental",
      description: "Pour réduire l'impact écologique et assurer le respect de la réglementation.",
      accent: "#16A34A", light: "#F0FDF4", tag: "Environnement"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "ISO 45001 : 2018",
      subtitle: "Santé et sécurité au travail",
      description: "Pour protéger les collaborateurs et prévenir les risques professionnels.",
      accent: "#DC2626", light: "#FEF2F2", tag: "Sécurité"
    }
  ];

  return (
    <section id="normes" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">

        <Animate variant="fadeUp">
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Référentiels</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              Les trois piliers fondamentaux du QSE
            </h2>
            <p className="text-xl text-gray-500">ISO 9001, ISO 14001 et ISO 45001</p>
          </div>
        </Animate>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {normes.map((norme, index) => (
            <Animate key={index} variant="fadeUp" delay={`${index * 0.12}s`}>
              <div className="group border border-gray-100 rounded-2xl p-8 lg:p-10 hover:border-transparent hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{ backgroundColor: norme.light, color: norme.accent }}
                  >
                    {norme.tag}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: norme.light, color: norme.accent }}
                  >
                    {norme.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{norme.title}</h3>
                <p className="text-base font-semibold mb-4" style={{ color: norme.accent }}>{norme.subtitle}</p>
                <p className="text-gray-700 text-base leading-[1.9]">{norme.description}</p>
                <div
                  className="mt-8 h-0.5 w-10 rounded-full group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: norme.accent }}
                />
              </div>
            </Animate>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Animate variant="fadeLeft">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">L'interconnexion des normes QSE</h3>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { label: "ISO 9001",  sub: "Qualité et amélioration continue",  color: "#2563EB", bg: "#EFF6FF" },
                  { label: "ISO 14001", sub: "Environnement et prévention",        color: "#16A34A", bg: "#F0FDF4" },
                  { label: "ISO 45001", sub: "Santé et sécurité au travail",       color: "#DC2626", bg: "#FEF2F2" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100">
                    <span className="text-sm font-bold px-3 py-1 rounded-lg whitespace-nowrap" style={{ backgroundColor: item.bg, color: item.color }}>
                      {item.label}
                    </span>
                    <span className="text-base text-gray-600">{item.sub}</span>
                  </div>
                ))}
                <div className="flex items-center justify-center my-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3v11M10 14l-4-4M10 14l4-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-blue-600 text-white rounded-xl px-5 py-4">
                  <span className="text-base font-semibold">Système de Management Intégré (SMI)</span>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-[1.9]">
                Les normes ISO 9001, 14001 et 45001 ne sont pas isolées. Elles convergent pour créer
                un système de management QSE unifié et cohérent.
              </p>
            </div>
          </Animate>

          <Animate variant="fadeRight" delay="0.1s">
            <div className="bg-blue-600 rounded-2xl p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-sm font-semibold tracking-widest text-blue-200 uppercase">SMI</span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-6">
                  Qu'est-ce qu'un Système de Management Intégré QSE (SMI) ?
                </h3>
                <p className="text-white text-base leading-[1.9] mb-8">
                  Un Système de Management Intégré (SMI) QSE fusionne harmonieusement les exigences
                  qualité, sécurité et environnement. Cette approche globale permet d'optimiser les
                  processus, de réduire les coûts et d'améliorer la coordination interne de votre entreprise.
                </p>
              </div>
              <div className="border-l-2 border-blue-300 pl-5">
                <p className="text-white text-base italic leading-[1.9]">
                  "Par exemple, une entreprise industrielle a pu réduire ses incidents de 30 % et
                  diminuer ses déchets grâce à la mise en œuvre de notre SMI."
                </p>
              </div>
            </div>
          </Animate>
        </div>

      </div>
    </section>
  );
};

export default NormesISO;
