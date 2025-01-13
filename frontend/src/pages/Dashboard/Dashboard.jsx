import ActivityChart from "../../components/ActivityChart/ActivityChart";
import BarnavVertical from "../../components/BarnavVertical/BarnavVertical";
import AverageSessionChart from "../../components/AverageSessionChart/AverageSessionChart"
import Header from "../../components/Header/Header";
import PerformanceRadar from "../../components/PerformanceRadar/PerformanceRadar.JSX";
import {
  fetchMockUserData,
  fetchMockUserActivity,
  fetchMockUserAverageSessions,
  fetchMockUserPerformance
} from "../../services/mockService";
import "./dachboard.css";


export default function Dashboard() {
  const userId = 18;
  const userData = fetchMockUserData(userId);
  const userActivity = fetchMockUserActivity(userId);
  const userAverageSessions = fetchMockUserAverageSessions(userId);
  const userPerformance = fetchMockUserPerformance(userId);
  console.log(userActivity);

  return (
    <div>
      <Header />
      <main className="main">
        <BarnavVertical />
        <section className="dashboard">
          <div className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour{" "}
              <span className="dashboard-header-name">
                {userData.userInfos.firstName}
              </span>
            </h1>
            <p className="dashboard-header-message">
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="dashboard-charts">
            <div className="dashboard-charts-activity dashboard-charts-all">
              <ActivityChart data={userActivity.sessions} />
            </div>
            <div className="dashboard-charts-sessions dashboard-charts-all">
            <AverageSessionChart data={userAverageSessions.sessions} />
            </div>
            <div className="dashboard-charts-performance dashboard-charts-all">
              <PerformanceRadar data={userPerformance} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
