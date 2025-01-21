
/**
 * @file mockService.js
 * @description Service pour récupérer des données mockées.
 * Ces fonctions permettent d'accéder aux données simulées pour tester l'application sans API réelle.
 * 
 */
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

/**
 * Récupère les données utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les données utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserData = (userId) => {
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId, 10));
    if (!user) {
      console.warn(`Utilisateur avec l'ID ${userId} non trouvé dans les données mockées.`);
      return null;
    }
    return user;
  };
/**
 * Récupère les activités utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les activités utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserActivity = (userId) => {
    const activity = USER_ACTIVITY.find((activity) => activity.userId === parseInt(userId, 10));
    if (!activity) {
      console.warn(`Activité pour l'utilisateur avec ID ${userId} non trouvée dans les données mockées.`);
      return null;
    }
    return activity;
  };

/**
 * Récupère les sessions moyennes utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les sessions moyennes utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserAverageSessions = (userId) => {
    const sessions = USER_AVERAGE_SESSIONS.find((session) => session.userId === parseInt(userId, 10));
    if (!sessions) {
      console.warn(`Sessions moyennes pour l'utilisateur avec ID ${userId} non trouvées dans les données mockées.`);
      return null;
    }
    return sessions;
  };
  

/**
 * Récupère les performances utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les performances utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserPerformance = (userId) => {
    const performance = USER_PERFORMANCE.find((performance) => performance.userId === parseInt(userId, 10));
    if (!performance) {
      console.warn(`Performances pour l'utilisateur avec ID ${userId} non trouvées dans les données mockées.`);
      return null;
    }
    return performance;
  };
  