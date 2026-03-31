# Centre QSE - Site Web

Site web moderne et responsive pour le Centre de Consultation pour la Mise en œuvre de Normes Qualité, Sécurité et Environnementale (QSE).

## 🚀 Fonctionnalités

- **Navigation fluide** : Navigation par sections avec smooth scroll
- **Design moderne** : Interface claire avec couleurs bleues apaisantes
- **Responsive** : Compatible tous appareils (mobile, tablette, desktop)
- **Animations** : Effets de transition et animations au scroll
- **Formulaire de contact** : Validation complète des champs
- **Composants modulaires** : Architecture React avec composants réutilisables

## 📦 Structure du projet

```
centre-qse-site/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Composant principal
│   ├── Header.jsx          # En-tête et navigation
│   ├── Hero.jsx            # Section d'accueil
│   ├── ImportanceQSE.jsx   # Section importance QSE
│   ├── NormesISO.jsx       # Section normes ISO
│   ├── Services.jsx        # Section services
│   ├── Temoignage.jsx      # Section témoignage client
│   ├── Contact.jsx         # Section contact avec formulaire
│   ├── Footer.jsx          # Pied de page
│   ├── index.js            # Point d'entrée
│   └── index.css           # Styles Tailwind
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation

1. **Installer les dépendances** :
```bash
cd centre-qse-site
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🎨 Technologies utilisées

- **React** 18.2.0 - Framework JavaScript
- **Tailwind CSS** 3.4.1 - Framework CSS utility-first
- **React Icons** 5.0.1 - Bibliothèque d'icônes
- **PostCSS** & **Autoprefixer** - Traitement CSS

## 📱 Sections du site

1. **Accueil** - Hero section avec présentation générale
2. **Importance QSE** - Les raisons d'adopter une démarche QSE
3. **Normes ISO** - Présentation des trois piliers (ISO 9001, 14001, 45001)
4. **Services** - Offre d'accompagnement complète
5. **Témoignage** - Retour d'expérience client
6. **Contact** - Formulaire de contact et coordonnées

## 🎯 Fonctionnalités du formulaire de contact

- Validation en temps réel
- Champs obligatoires : Prénom, Nom, Téléphone, Email, Message
- Messages d'erreur clairs
- Confirmation visuelle après envoi
- Reset automatique après 3 secondes

## 🌈 Palette de couleurs

- **Primaire** : Bleu (#3b82f6 et variations)
- **Secondaire** : Vert, Rouge, Teal (pour les différentes normes)
- **Neutre** : Gris, Blanc
- **Arrière-plans** : Dégradés doux bleu/blanc

## 📝 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée la version de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## 🔧 Configuration Tailwind

Le fichier `tailwind.config.js` inclut :
- Couleurs personnalisées pour la marque
- Animations personnalisées (fade-in, slide-up)
- Extensions de thème

## 📞 Contact

**Email** : contact@centre-qse.gn  
**Téléphone** : +224 625 050 708  
**Localisation** : Guinée, Conakry

## 🏗️ Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build/` et prêts à être déployés.

## 🚀 Déploiement

Le site peut être déployé sur :
- **Vercel** : Connectez votre repo GitHub et déployez automatiquement
- **Netlify** : Drag & drop du dossier build
- **GitHub Pages** : Utilisez `npm run deploy`

## 📄 Licence

© 2024 Centre QSE. Tous droits réservés.
