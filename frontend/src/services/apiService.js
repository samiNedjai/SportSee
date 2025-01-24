/**
 * @file apiService.js
 * @description Service pour la récupération et le formatage des données utilisateur via l'API ou des données mockées.
 * Ce service utilise des modèles de données (classes) pour transformer les données brutes en objets structurés,
 * facilitant leur utilisation dans l'application.
 */

import { UserData, UserActivity, UserAverageSessions, UserPerformance } from "../Models/dataModels";
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
 * @async
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<UserData|null>} - Retourne une instance de la classe `UserData` ou `null` si aucune donnée n'est disponible.
 * @throws {Error} - En cas d'échec de l'API ou absence de données mockées pour l'utilisateur.
 * 
 * @example
 * const userData = await fetchUserData(12);
 * console.log(userData.firstName); // Affiche "Karl"
 */
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    return new UserData(data.data);
  } catch (error) {
    console.error("Error fetching user data, falling back to mock data:", error);
    const mockData = fetchMockUserData(userId);
    if (!mockData) {
      console.error(`Aucune donnée mockée trouvée pour l'utilisateur avec ID ${userId}.`);
      return null;
    }
    return new UserData(mockData);
  }
};

/**
 * Récupère les activités utilisateur depuis l'API ou les données mockées en cas d'erreur.
 *
 * @async
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<UserActivity|null>} - Retourne une instance de la classe `UserActivity` ou `null` si aucune donnée n'est disponible.
 * @throws {Error} - En cas d'échec de l'API ou absence de données mockées pour l'utilisateur.
 * 
 * @example
 * const userActivity = await fetchUserActivity(12);
 * console.log(userActivity.sessions); // Affiche les sessions d'activité.
 */
export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    return new UserActivity(data.data);
  } catch (error) {
    console.error("Error fetching user activity, falling back to mock data:", error);
    const mockData = fetchMockUserActivity(userId);
    return mockData ? new UserActivity(mockData) : null;
  }
};

/**
 * Récupère les sessions moyennes utilisateur depuis l'API ou les données mockées en cas d'erreur.
 *
 * @async
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<UserAverageSessions|null>} - Retourne une instance de la classe `UserAverageSessions` ou `null` si aucune donnée n'est disponible.
 * @throws {Error} - En cas d'échec de l'API ou absence de données mockées pour l'utilisateur.
 * 
 * @example
 * const averageSessions = await fetchUserAverageSessions(12);
 * console.log(averageSessions.sessions); // Affiche les durées moyennes des sessions.
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    return new UserAverageSessions(data.data);
  } catch (error) {
    console.error("Error fetching user average sessions, falling back to mock data:", error);
    const mockData = fetchMockUserAverageSessions(userId);
    return mockData ? new UserAverageSessions(mockData) : null;
  }
};

/**
 * Récupère les performances utilisateur depuis l'API ou les données mockées en cas d'erreur.
 *
 * @async
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<UserPerformance|null>} - Retourne une instance de la classe `UserPerformance` ou `null` si aucune donnée n'est disponible.
 * @throws {Error} - En cas d'échec de l'API ou absence de données mockées pour l'utilisateur.
 * 
 * @example
 * const userPerformance = await fetchUserPerformance(12);
 * console.log(userPerformance.data); // Affiche les données de performance.
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    return new UserPerformance(data.data);
  } catch (error) {
    console.error("Error fetching user performance, falling back to mock data:", error);
    const mockData = fetchMockUserPerformance(userId);
    return mockData ? new UserPerformance(mockData) : null;
  }
};
