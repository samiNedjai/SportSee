
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
    return USER_MAIN_DATA.find((user) => user.id === userId);
};

/**
 * Récupère les activités utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les activités utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserActivity = (userId) => {
    return USER_ACTIVITY.find((activity) => activity.userId === userId);
};

/**
 * Récupère les sessions moyennes utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les sessions moyennes utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserAverageSessions = (userId) => {
    return USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
};

/**
 * Récupère les performances utilisateur depuis les données mockées.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object|undefined} - Les performances utilisateur correspondant à l'identifiant ou `undefined` si non trouvé.
 */
export const fetchMockUserPerformance = (userId) => {
    return USER_PERFORMANCE.find((performance) => performance.userId === userId);
};