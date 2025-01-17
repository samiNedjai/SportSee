import {
  fetchMockUserData,
  fetchMockUserActivity,
  fetchMockUserAverageSessions,
  fetchMockUserPerformance,
} from "./mockService";

const BASE_URL = 'http://localhost:3000';

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
