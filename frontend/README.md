# SportSee

SportSee est une application web conçue pour suivre et analyser les données d'activités sportives. Elle offre aux utilisateurs des visualisations complètes et des métriques clés pour suivre leurs progrès en matière de fitness.

---

## Table des Matières

1. [Présentation du Projet](#présentation-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Structure du Projet](#structure-du-projet)
5. [Installation et Configuration](#installation-et-configuration)
6. [Utilisation](#utilisation)
7. [APIs](#apis)
8. [Données Mockées](#données-mockées)
9. [Composants](#composants)
10. [Pages](#pages)
11. [Services](#services)
12. [Auteurs](#auteurs)

---

## Présentation du Projet

SportSee propose aux utilisateurs un tableau de bord interactif pour visualiser leur activité quotidienne, la durée de leurs sessions, leurs performances et leur score global. L'application s'intègre avec une API backend pour récupérer des données spécifiques à l'utilisateur et utilise des données mockées en cas de problème avec l'API.

---

## Fonctionnalités

- Connexion utilisateur pour afficher les données personnalisées.
- Graphiques interactifs pour l'activité quotidienne, les tendances des sessions et les métriques de performance.
- Mécanisme de secours pour utiliser des données mockées lorsque l'API n'est pas disponible.
- Design responsive pour une expérience utilisateur optimale sur tous les appareils.

---

## Technologies Utilisées

- **Frontend :** React, Recharts
- **Routing :** React Router
- **Styles :** CSS Modules
- **Backend :** Node.js (Endpoints API pour récupérer les données utilisateur)

---

## Structure du Projet

```
/src
  |-- assets/            # Static images and icons
  |-- components/        # Reusable React components
  |-- data/              # Mock data
  |-- pages/             # Page components (Dashboard, Login)
  |-- services/          # API and mock data service handlers
  |-- styles/            # Global styles
  |-- App.jsx            # Root component with routing setup
  |-- main.jsx           # Application entry point
```

---

## Installation et Configuration

### Prérequis

- Node.js (>=14.x)
- npm ou yarn

### Étapes

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/[VotreNomUtilisateurGitHub]/SportSee.git
   cd SportSee

2. Installer les dépendances :
   ```bash
   npm install
   # or
   yarn install
   ```

3. Lancer le serveur de développement:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4.Accéder à l'application dans le navigateur à l'adresse  `http://localhost:5173`.

---

## Utilisation

1. Naviguer vers la page Connexion.
2. Entrer un ID utilisateur (par exemple, `12` ou `18`).
3.Cliquer sur **Valider** pour accéder au tableau de bord.
4. Si l'ID utilisateur n'existe pas, un message d'erreur sera affiché.

---

## APIs

Le backend fournit les endpoints suivants :

- **GET** `/user/:userId` - Récupère les informations d'un utilisateur.
- **GET** `/user/:userId/activity` -  Récupère les données d'activité quotidienne.
- **GET** `/user/:userId/average-sessions` - Récupère les tendances hebdomadaires des sessions.
- **GET** `/user/:userId/performance` - Récupère les métriques de performance.

Les données mockées seront utilisées lorsque l'API n'est pas disponible.

---

##Données Mockées

Les données mockées sont stockées dans  `/data/mockData.js`  et gérées via `/services/mockService.js`. Cela garantit que l'application peut fonctionner sans API en direct.

---

## Composants

### ActivityChart.jsx
- Affiche les données d'activité quotidienne (poids et calories brûlées).
- Utilise Recharts pour le rendu du graphique en barres.

### AverageSessionChart.jsx
- Visualise la durée moyenne des sessions sur une semaine.

### PerformanceRadar.jsx
- Montre les métriques de performance à l'aide d'un graphique radar.

### ScoreChart.jsx
- Affiche le score global de l'utilisateur sous forme de graphique radial.

### KeyData.jsx
- Met en avant les données nutritionnelles clés telles que les calories, les protéines, les glucides et les lipides.


---

## Pages

### Login.jsx
- Fournit un formulaire pour saisir l'ID utilisateur.
- Redirige vers le tableau de bord après validation.

### Dashboard.jsx
- Affiche les données spécifiques à l'utilisateur via divers graphiques et métriques.
- Gère le fallback vers les données mockées.

---

## Services

### apiService.js
- Récupère les données depuis l'API backend.
- Utilise les données mockées en cas d'erreur.

### mockService.js
- Récupère les données à partir de l'ensemble de données mockées prédéfinies.

---

## Authors

- [Nedjai Sami] ([Sami.nedjai@outlook.fr])



