import ActivityChart from "../../components/ActivityChart/ActivityChart";
import BarnavVertical from "../../components/BarnavVertical/BarnavVertical";
import Header from "../../components/Header/Header";
import { fetchMockUserData, fetchMockUserActivity } from '../../services/mockService';
import "./dachboard.css"

export default function Dashboard() {

  const userId = 12; 
  const userData = fetchMockUserData(userId);
  const userActivity = fetchMockUserActivity(userId);
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
            </div>
          </section>
        </main>
      </div>
    );
}
