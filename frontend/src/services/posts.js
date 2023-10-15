import axios from 'axios';
const baseUrl = 'http://localhost:4002';

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/posts`);
  return request.data;
};
const getUser = async () => {
  const request = await axios.get(`${baseUrl}/users`);
  return request.data;
};

export default { getAll, getUser };
