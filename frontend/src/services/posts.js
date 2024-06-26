import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
  console.log(config, newObject);
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
const createComment = async (id, newComment) => {
  const response = await axios.post(
    `${baseUrl}/comment/postcomment/${id}`,
    newComment
  );
  return response.data;
};

const getSinglePost = async (id) => {
  const response = await axios.get(`${baseUrl}/post/${id}`);
  return response.data;
};
// Comments services
const getComments = async () => {
  const response = await axios.get(`${baseUrl}/comment`);
  return response.data;
};
const deleteComments = async (id, userId) => {
  const config = {
    headers: {
      Authorization: token,
    },
    params: {
      userId: userId,
    },
  };
  const request = await axios.delete(
    `${baseUrl}/comment/deletecomment/${id}`,
    config
  );
  return request.data;
};

export default {
  getAll,
  getUser,
  create,
  setToken,
  update,
  deletePost,
  updatePost,
  createComment,
  getComments,
  getSinglePost,
  deleteComments,
};
