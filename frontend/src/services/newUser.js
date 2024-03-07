import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const register = async (credentials) => {
  const response = await axios.post(`${baseUrl}/signup`, credentials);
  return response.data;
};
export default { register };
