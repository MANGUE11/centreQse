import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          prenom: '',
          nom: '',
          telephone: '',
          email: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+224 625 050 708",
      link: "tel:+224625050708"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: "contact@centre-qse.gn",
      link: "mailto:contact@centre-qse.gn"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Guinée, Conakry",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Contactez-nous pour transformer votre performance QSE dès aujourd'hui
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Bénéficiez d'un diagnostic gratuit et sans engagement. Rejoignez les entreprises qui 
            ont fait de la QSE un avantage concurrentiel.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white/90 hover:text-white transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/90">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horaires d'ouverture</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi</span>
                    <span>9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-red-500">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🌱 Notre engagement environnemental
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensemble, construisons un avenir plus sûr, plus qualitatif et plus respectueux 
                  de l'environnement.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Formulaire de contact
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      Message envoyé avec succès !
                    </h4>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Prénom et Nom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors.prenom ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300`}
                          placeholder="Votre prénom"
                        />
                        {errors.prenom && (
                          <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors.nom ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300`}
                          placeholder="Votre nom"
                        />
                        {errors.nom && (
                          <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                        )}
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.telephone ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300`}
                        placeholder="+224 XXX XXX XXX"
                      />
                      {errors.telephone && (
                        <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300`}
                        placeholder="votre.email@exemple.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 resize-none`}
                        placeholder="Décrivez votre projet ou vos besoins..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 group"
                    >
                      <span>Envoyer le message</span>
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
