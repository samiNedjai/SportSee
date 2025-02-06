
/**
 * @file App.jsx
 * @description Point d'entrée principal de l'application React.
 * Ce fichier gère les routes et la navigation de l'application en utilisant React Router.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

/**
 * Composant principal de l'application.
 * Configure les routes de l'application et définit la structure de navigation.
 * 
 * @returns {JSX.Element} L'application avec les routes configurées.
 */
export default function App() {
 

  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<Login />} />
         {/* Route pour la page Dashboard avec paramètre `userId` */}
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}


