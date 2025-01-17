/**
 * @file Header.jsx
 * @description Composant React pour l'en-tête de l'application SportSee.
 * Il inclut le logo de l'application et une barre de navigation avec plusieurs liens.
 * 
 */

import logo from '../../assets/header-logo.svg';
import "./header.css"

/**
 * Composant `Header` - En-tête principal de l'application.
 * 
 * @returns {JSX.Element} Une barre de navigation horizontale contenant le logo et des liens.
 * 
 * @example
 * <Header />
 */
export default function Header () {
  return (
    <header className="header">
    <nav className="header-nav">
      <a className="header-nav-logo" href="/">
        <img src={logo} alt="Sportsee Logo" />
      </a>
      <a className="header-nav-link" href="/">
        Accueil
      </a>
      <a className="header-nav-link" href="/">
        Profil
      </a>
      <a className="header-nav-link" href="/">
        Réglage
      </a>
      <a className="header-nav-link header-nav-link-last" href="/">
        Communauté
      </a>
    </nav>
  </header>
  )
}

