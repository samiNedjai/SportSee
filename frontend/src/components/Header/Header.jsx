import logo from '../../assets/header-logo.svg';
import "./header.css"

function Header () {
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

export default Header