/**
 * @file main.jsx
 * @description Point d'entrée de l'application React.
 * Ce fichier monte le composant principal (`App`) dans le DOM.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Monte le composant racine (`App`) dans l'élément DOM avec l'ID `root`.
 * `StrictMode` est utilisé pour identifier les problèmes potentiels dans l'application React.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
