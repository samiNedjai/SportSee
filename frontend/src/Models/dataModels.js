/**
 * @file dataModels.js
 * @description Ce fichier contient des classes de modèles qui permettent de structurer et de formater les données récupérées depuis l'API ou les données mockées pour l'application SportSee.
 * Chaque classe représente un ensemble spécifique de données utilisateur : informations personnelles, activités, sessions moyennes et performances.
 */

/**
 * Modèle pour les données utilisateur.
 * Cette classe structure les informations principales d'un utilisateur, comme son prénom, son nom, son score quotidien et ses données clés (calories, protéines, glucides, lipides).
 */
export class UserData {
  /**
   * @constructor
   * @param {Object} data - Les données brutes récupérées depuis l'API ou les données mockées.
   * @param {number} data.id - Identifiant de l'utilisateur.
   * @param {Object} data.userInfos - Informations personnelles de l'utilisateur.
   * @param {string} data.userInfos.firstName - Prénom de l'utilisateur.
   * @param {string} data.userInfos.lastName - Nom de l'utilisateur.
   * @param {number} data.todayScore - Score quotidien (facultatif).
   * @param {number} data.score - Ancienne version du score quotidien (facultatif).
   * @param {Object} data.keyData - Données clés de l'utilisateur : calories, protéines, glucides et lipides.
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.todayScore = data.todayScore || data.score; // Gestion des deux versions possibles du score.
    this.keyData = data.keyData;
  }
}

/**
 * Modèle pour les activités utilisateur.
 * Cette classe structure les données des sessions d'activité quotidienne d'un utilisateur, comme le jour, le poids et les calories brûlées.
 */
export class UserActivity {
  /**
   * @constructor
   * @param {Object} data - Les données brutes récupérées depuis l'API ou les données mockées.
   * @param {number} data.userId - Identifiant de l'utilisateur.
   * @param {Array<Object>} data.sessions - Liste des sessions d'activité.
   * @param {string} data.sessions[].day - Jour de la session (format "YYYY-MM-DD").
   * @param {number} data.sessions[].kilogram - Poids de l'utilisateur pendant la session (en kg).
   * @param {number} data.sessions[].calories - Calories brûlées pendant la session.
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

/**
 * Modèle pour les sessions moyennes utilisateur.
 * Cette classe structure les données sur la durée moyenne des sessions d'un utilisateur, par jour de la semaine.
 */
export class UserAverageSessions {
  /**
   * @constructor
   * @param {Object} data - Les données brutes récupérées depuis l'API ou les données mockées.
   * @param {number} data.userId - Identifiant de l'utilisateur.
   * @param {Array<Object>} data.sessions - Liste des sessions moyennes.
   * @param {number} data.sessions[].day - Jour de la semaine (1 = Lundi, 7 = Dimanche).
   * @param {number} data.sessions[].sessionLength - Durée moyenne de la session (en minutes).
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }
}

/**
 * Modèle pour les performances utilisateur.
 * Cette classe structure les données de performance d'un utilisateur, comme l'intensité, la vitesse ou la force.
 */
export class UserPerformance {
  /**
   * @constructor
   * @param {Object} data - Les données brutes récupérées depuis l'API ou les données mockées.
   * @param {number} data.userId - Identifiant de l'utilisateur.
   * @param {Object} data.kind - Description des types de performance (ex. 1 = Cardio, 2 = Énergie).
   * @param {Array<Object>} data.data - Liste des performances.
   * @param {number} data.data[].value - Valeur associée à la performance.
   * @param {number} data.data[].kind - Identifiant du type de performance (référencé dans `kind`).
   */
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((performance) => ({
      value: performance.value,
      kind: performance.kind,
    }));
  }
}
