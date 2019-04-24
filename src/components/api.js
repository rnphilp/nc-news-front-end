import axios from 'axios';

const BASE_URL = 'https://nc-news-rphilp.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

export const getArticles = async query => {
  const { data } = await axios.get(`${BASE_URL}/articles${query}`);
  return data;
};

export const getArticle = async articleId => {
  const { data } = await axios.get(`${BASE_URL}/articles/${articleId}`);
  return data;
};

export const getComments = async articleId => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${articleId}/comments`
  );
  return data.comments;
};
