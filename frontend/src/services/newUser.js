import axios from 'axios';

const baseUrl = 'http://localhost:4002/signup';

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};
export default { register };
