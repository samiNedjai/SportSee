/**
 * @file apiService.js
 * @description Service pour la récupération des données utilisateur via API.
 * Fournit des fonctions pour obtenir les informations utilisateur, les activités,
 * les sessions moyennes et les performances à partir de l'API ou des données mockées en cas d'échec.
 * 
 */

import {
  fetchMockUserData,
  fetchMockUserActivity,
  fetchMockUserAverageSessions,
  fetchMockUserPerformance,
} from "./mockService";

const BASE_URL = 'http://localhost:3000';

/**
 * Récupère les données utilisateur depuis l'API ou les données mockées en cas d'erreur.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} - Les données utilisateur.
 */

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return await response.json().then((data) => data.data);
  } catch (error) {
    console.error("Error fetching user data, falling back to mock data:", error);
    return fetchMockUserData(parseInt(userId));
  }
};

/**
 * Récupère les activités utilisateur depuis l'API ou les données mockées en cas d'erreur.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} - Les activités utilisateur.
 */
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return await response.json().then((data) => data.data);
  } catch (error) {
    console.error("Error fetching user activity, falling back to mock data:", error);
    return fetchMockUserActivity(parseInt(userId));
  }
};

/**
 * Récupère les sessions moyennes utilisateur depuis l'API ou les données mockées en cas d'erreur.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} - Les sessions moyennes utilisateur.
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return await response.json().then((data) => data.data);
  } catch (error) {
    console.error("Error fetching user average sessions, falling back to mock data:", error);
    return fetchMockUserAverageSessions(parseInt(userId));
  }
};

/**
 * Récupère les performances utilisateur depuis l'API ou les données mockées en cas d'erreur.
 * 
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Promise<Object>} - Les performances utilisateur.
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return await response.json().then((data) => data.data);
  } catch (error) {
    console.error("Error fetching user performance, falling back to mock data:", error);
    return fetchMockUserPerformance(parseInt(userId));
  }
};