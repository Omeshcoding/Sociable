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

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/post/likePost/${id}`, newObject);
  return response.data;
};
const deletePost = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = await axios.delete(
    `${baseUrl}/post/deletePost/${id}`,
    config
  );
  return request.then((response) => response.data);
};

const updatePost = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/post/${id}`, newObject);
  return response.data;
};

export default {
  getAll,
  getUser,
  create,
  setToken,
  update,
  deletePost,
  updatePost,
};
