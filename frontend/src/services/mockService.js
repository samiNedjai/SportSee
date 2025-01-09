import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

export const fetchMockUserData = (userId) => {
    return USER_MAIN_DATA.find((user) => user.id === userId);
};

export const fetchMockUserActivity = (userId) => {
    return USER_ACTIVITY.find((activity) => activity.userId === userId);
};

export const fetchMockUserAverageSessions = (userId) => {
    return USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
};

export const fetchMockUserPerformance = (userId) => {
    return USER_PERFORMANCE.find((performance) => performance.userId === userId);
};
