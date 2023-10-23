import axios from 'axios';
const baseUrl = 'http://localhost:4002';

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/posts`);
  return request.data;
};
const getUser = async () => {
  const request = await axios.get(`${baseUrl}/users`);
  return request.data;
};

const create = async (newObject) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  };
  const response = await axios.post(
    `${baseUrl}/post/createPost`,
    newObject,
    config
  );
  return response.data;
};
export default { getAll, getUser, create, setToken };
