import axios from 'axios';

const loginEndpoint = '/api/login';  // Assuming this is your login endpoint

export const login = async (username, password) => {
  try {
    const response = await axios.post(loginEndpoint, { username, password });
    const { role, name } = response.data;
    return { role, name };
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
