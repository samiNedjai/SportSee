/**
 * @file Login.jsx
 * @description Composant pour la page de connexion permettant à l'utilisateur
 * de saisir un identifiant et d'accéder au tableau de bord correspondant.
 * 
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../services/apiService";
import "./login.css";

/**
 * Page `Login`
 * 
 * @returns {JSX.Element} Composant de connexion utilisateur.
 * 
 * @description Cette page permet à un utilisateur de saisir son identifiant.
 * Après validation, l'utilisateur est redirigé vers la page tableau de bord
 * si l'identifiant existe. En cas d'erreur ou d'utilisateur non trouvé, un
 * message approprié est affiché.
 */
export default function Login() {
  const [userId, setUserId] = useState("");// État pour stocker l'identifiant utilisateur
  const [errorMessage, setErrorMessage] = useState("");// État pour stocker les messages d'erreur
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

   /**
   * Fonction de gestion de la connexion.
   * Vérifie si l'identifiant utilisateur existe et redirige vers la page dashboard.
   * Affiche un message d'erreur en cas de problème.
   */
  const handleLogin = async () => {
    try {
      const userData = await fetchUserData(parseInt(userId, 10));
      if (userData) {
        navigate(`/dashboard/${userId}`); // Redirige vers le tableau de bord
      } else {
        setErrorMessage("Cet utilisateur n'existe pas.");  // Message d'erreur si utilisateur introuvable
      }
    } catch (error) {
      setErrorMessage("Erreur lors de la connexion. Veuillez réessayer."); // Message d'erreur pour problème réseau ou API
    }
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <div className="login-form">
        <label htmlFor="userId">Identifiant utilisateur :</label>
        <input
          type="text"
          id="userId"
          placeholder="Entrez votre identifiant utilisateur"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} 
          />
        <button onClick={handleLogin}>Valider</button> 
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>} 
    </div>
  );
}
