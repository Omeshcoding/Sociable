import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);

  return response.data;
};
const getUsers = async () => {
  const response = await axios.get(`baseUrl/users`);
  return response.data;
};

const isTokenExpired = (token) => {
  const cuurentTimeStamp = Math.floor(Date.now() / 1000);
  return cuurentTimeStamp > token.exp;
};
export default { login, isTokenExpired, getUsers };
