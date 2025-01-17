import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../services/apiService";
import "./login.css";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userData = await fetchUserData(parseInt(userId, 10));
      if (userData) {
        navigate(`/dashboard/${userId}`); // Redirige vers le Dashboard avec userId
      } else {
        setErrorMessage("Cet utilisateur n'existe pas.");
      }
    } catch (error) {
      setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
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
