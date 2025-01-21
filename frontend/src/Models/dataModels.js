// services/dataModels.js

// Modèle pour les données utilisateur
export class UserData {
    constructor(data) {
      this.id = data.id;
      this.firstName = data.userInfos.firstName;
      this.lastName = data.userInfos.lastName;
      this.todayScore = data.todayScore || data.score;
      this.keyData = data.keyData;
    }
  }
  
  // Modèle pour les activités utilisateur
  export class UserActivity {
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions.map((session) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      }));
    }
  }
  
  // Modèle pour les sessions moyennes utilisateur
  export class UserAverageSessions {
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions.map((session) => ({
        day: session.day,
        sessionLength: session.sessionLength,
      }));
    }
  }
  
  // Modèle pour les performances utilisateur
  export class UserPerformance {
    constructor(data) {
      this.userId = data.userId;
      this.kind = data.kind;
      this.data = data.data.map((performance) => ({
        value: performance.value,
        kind: performance.kind,
      }));
    }
  }
  