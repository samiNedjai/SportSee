/**
 * @file BarnavHorizontal.jsx
 * @description Composant React pour l'en-tête de l'application SportSee.
 * Il inclut le logo de l'application et une barre de navigation avec plusieurs liens.
 * 
 */

import logo from '../../assets/header-logo.svg';
import "./barnavHorizontal.css"

/**
 * Composant `BarnavHorizontal` - En-tête principal de l'application.
 * 
 * @returns {JSX.Element} Une barre de navigation horizontale contenant le logo et des liens.
 * 
 * @example
 * <BarnavHorizontal />
 */
export default function BarnavHorizontal() {
  return (
    <header className="barnavHorizontal">
    <nav className="barnavHorizontal-nav">
      <a className="barnavHorizontal-logo" href="/">
        <img src={logo} alt="Sportsee Logo" />
      </a>
      <a className="barnavHorizontal-link" href="/">
        Accueil
      </a>
      <a className="barnavHorizontal-link" href="/">
        Profil
      </a>
      <a className="barnavHorizontal-link" href="/">
        Réglage
      </a>
      <a className="barnavHorizontal-link barnavHorizontal-link-last" href="/">
        Communauté
      </a>
    </nav>
  </header>
  )
}

