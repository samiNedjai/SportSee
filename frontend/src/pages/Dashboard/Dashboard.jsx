
/**
 * @file Dashboard.jsx
 * @description Composant de la page principale affichant le tableau de bord d'un utilisateur.
 * Affiche les données d'activité, de performance, de sessions moyennes et de score global.
 * En cas d'erreur ou de chargement, des messages appropriés sont affichés.
 * 
 */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/ActivityChart/ActivityChart";
import BarnavVertical from "../../components/BarnavVertical/BarnavVertical";
import AverageSessionChart from "../../components/AverageSessionChart/AverageSessionChart"
import Header from "../../components/Header/Header";
import PerformanceRadar from "../../components/PerformanceRadar/PerformanceRadar.JSX";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import KeyData from "../../components/KeyData/KeyData";
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "../../services/apiService";
import "./dachboard.css";

/**
 * Page `Dashboard`
 * 
 * @returns {JSX.Element} Composant de la page tableau de bord utilisateur.
 * 
 * @description Cette page utilise les données de l'API ou des données mockées pour afficher
 * différents graphiques et informations liées à un utilisateur spécifique.
 * 
 * @example
 * // Exemple de route :
 * <Route path="/dashboard/:userId" component={Dashboard} />
 */

export default function Dashboard() {
  const { userId } = useParams()
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  /**
   * Récupère les données utilisateur depuis l'API ou des données mockées.
   * Affiche un message d'erreur si les données ne sont pas disponibles.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(userId);
        if (!userData) {
          console.error(`Utilisateur non trouvé pour l'ID ${userId}`);
          setUserNotFound(true);
          return;
        }
        setUserNotFound(false);
        setUserData(userData);
  
        const activityData = await fetchUserActivity(userId);
        setUserActivity(activityData);
  
        const averageSessionsData = await fetchUserAverageSessions(userId);
        setUserAverageSessions(averageSessionsData);
  
        const performanceData = await fetchUserPerformance(userId);
        setUserPerformance(performanceData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setUserNotFound(true);
      }
    };
    fetchData();
  }, [userId]);
  
  useEffect(() => {
    console.log("userData:", userData);
    console.log("userActivity:", userActivity);
    console.log("userAverageSessions:", userAverageSessions);
    console.log("userPerformance:", userPerformance);
  }, [userData, userActivity, userAverageSessions, userPerformance]);
  

 // Si l'utilisateur n'a pas été trouvé
  if (userNotFound) {
    return (
      <div>
        <Header />
        <main className="main">
          <BarnavVertical />
           <div className="error-container">
          <p>Utilisateur non trouvé. Veuillez vérifier l'identifiant.</p>
        </div>
        </main>
      </div>
    );
  }

 // Si les données sont en cours de chargement
  if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
    return (
      <div>
        <Header />
        <main className="main">
          <BarnavVertical />
          <div className="loading-container">
          <div className="loading-spinner"></div>
          <p style={{ marginLeft: "10px" }}>Chargement...</p>
        </div>
        </main>
      </div>
    );
  }

   // Affichage des données utilisateur
  return (
    <div>
      <Header />
      <main className="main">
        <BarnavVertical />
        <section className="dashboard">
          <div className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour{"   "}
              <span className="dashboard-header-name">
                {userData.firstName}
              </span>
            </h1>
            <p className="dashboard-header-message">
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="dashboard-charts">
            <div className="dashboard-activityChart dashboard-charts-all">
              <ActivityChart data={userActivity.sessions} />
            </div>
            <div className="dashboard-averageSession dashboard-charts-all">
            <AverageSessionChart data={userAverageSessions.sessions} />
            </div>
            <div className="dashboard-performanceRadar dashboard-charts-all">
              <PerformanceRadar data={userPerformance} />
            </div>
            <div className="dashboard-scoreChart dashboard-charts-all">
              <ScoreChart score={userData.todayScore || userData.score} />
            </div>
            <div className="key-data-containeur dashboard-charts-all  ">
      
            <KeyData keyData={userData.keyData} />
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}