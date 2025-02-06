import React from "react";
import { Link } from "react-router-dom";
import BarnavVertical from "../../components/BarnavVertical/BarnavVertical";
import BarnavHorizontal from "../../components/BarnavHorizontal/BarnavHorizontal";
import "./notFound.css";

export default function NotFound() {
  return (
    <div>
      {/* Navigation horizontale */}
      <BarnavHorizontal />

      <main className="main">
        {/* Navigation verticale */}
        <BarnavVertical />

        {/* Contenu principal de la page 404 */}
        <div className="not-found">
          <h1>404</h1>
          <p>Oups ! La page que vous recherchez n'existe pas.</p>
          <Link to="/" className="not-found-link">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
