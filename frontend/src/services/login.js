import axios from 'axios';
const baseUrl = 'http://localhost:4002/login';

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);

  return response.data;
};

const isTokenExpired = (token) => {
  const cuurentTimeStamp = Math.floor(Date.now() / 1000);
  return cuurentTimeStamp >= token.exp;
};
export default { login, isTokenExpired };
