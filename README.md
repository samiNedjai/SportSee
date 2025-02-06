# SportSee

SportSee est une application web permettant aux utilisateurs de suivre et analyser leur activité physique via un tableau de bord interactif. L’application est basée sur une API qui fournit les données des utilisateurs et affiche les performances sous forme de graphiques dynamiques.

## 📌 Table des matières

1. [Description du projet](#description-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Architecture du projet](#architecture-du-projet)
4. [Installation et exécution](#installation-et-exécution)
5. [Utilisation](#utilisation)
6. [API Backend](#api-backend)
7. [Frontend](#frontend)
8. [Gestion des erreurs](#gestion-des-erreurs)
9. [Auteurs](#auteurs)

---

## 🎯 Description du projet

SportSee a pour objectif d'afficher un tableau de bord interactif pour les utilisateurs souhaitant suivre leurs performances sportives. L'application récupère les données de l'utilisateur via une API et les affiche sous forme de graphiques grâce à la bibliothèque **Recharts**.

### ✅ Fonctionnalités :
- Connexion à un profil utilisateur via un **User ID**.
- Récupération des **données utilisateur** via une **API REST**.
- Affichage de plusieurs graphiques pour suivre la performance :
  - Activité quotidienne (bar chart)
  - Durée moyenne des sessions (line chart)
  - Performances (radar chart)
  - Score utilisateur (radial chart)
  - Statistiques nutritionnelles.
- Gestion des erreurs en cas de problème avec l’API (fallback vers des **données mockées**).
- Interface **responsive** pour s’adapter aux différentes tailles d’écrans.

---

## 🛠️ Technologies utilisées

### 🔹 Backend :
- [NodeJS (**version 12.18**)](https://nodejs.org/en/) or higher (tested up to Node 20.0) 
- [Yarn](https://yarnpkg.com/)
- **Docker** (Optionnel)
- **ESLint** (Linting)

### 🔹 Frontend :
- **React.js**
- **Vite**
- **Recharts** (Librairie de graphiques)
- **React Router** (Gestion de la navigation)
- **CSS Modules** (Gestion du style)
- **Fetch** (Récupération des données API)

---

## 🏢 Architecture du projet

```
/SportSee
  |-- backend/             # Serveur et API
  |   |-- controllers/     # Logique métier de l'API
  |   |-- models/         # Modèles des données
  |   |-- routes/         # Définition des routes API
  |   |-- server.js       # Point d'entrée du serveur
  |
  |-- frontend/            # Application React
  |   |-- src/
  |   |   |-- assets/      # Fichiers statiques (images, icônes)
  |   |   |-- components/  # Composants réutilisables
  |   |   |-- pages/       # Pages principales (Dashboard, 404, Login)
  |   |   |-- services/    # Gestion des appels API
  |   |   |-- models/      # Format des données récupérées
  |   |   |-- App.jsx      # Composant principal
  |   |   |-- main.jsx     # Point d’entrée de l’application
  |-- README.md            # Documentation principale
  |-- package.json         # Dépendances du projet
```

---

## 🚀 Installation et exécution

### 1️⃣ Cloner le projet :
```sh
git clone https://github.com/[VotreGitHub]/SportSee.git
cd SportSee
```

### 2️⃣ Installation du **Backend**
```sh
cd backend
yarn install
```

- **Démarrer le serveur** :
```sh
yern dev
```
L’API sera disponible à **http://localhost:3000/**.

### 3️⃣ Installation du **Frontend**
```sh
cd frontend
npm install
```

- **Démarrer l'application React** :
```sh
npm run dev
```
L’application sera accessible à **http://localhost:5173/**.

---

## 🔗 API Backend

L’API fournit 4 endpoints :

- **GET** `/user/:userId` → Récupère les infos utilisateur.
- **GET** `/user/:userId/activity` → Récupère les activités journalières.
- **GET** `/user/:userId/average-sessions` → Récupère les sessions moyennes.
- **GET** `/user/:userId/performance` → Récupère les performances.

---

## 🖥️ Gestion des erreurs

✅ **Cas gérés** :
- **API indisponible** → Données mockées utilisées.
- **ID utilisateur inexistant** → Message d’erreur affiché.
- **Route invalide** → Redirection vers une **page 404**.

---

## 👨‍💻 Auteurs

- **[NEJAI SAMI]**
- Contact : [sami.nedji@outlook.fr]



