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



export default function Dashboard() {
  const { userId } = useParams()
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(userId);
        if (!userData) {
          setUserNotFound(true);
        } else {
          setUserNotFound(false);
          setUserData(userData);
          setUserActivity(await fetchUserActivity(userId));
          setUserAverageSessions(await fetchUserAverageSessions(userId));
          setUserPerformance(await fetchUserPerformance(userId));
        }
      } catch (error) {
        setUserNotFound(true);
      }
    };
    fetchData();
  }, [userId]);
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
                {userData.userInfos.firstName}
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
