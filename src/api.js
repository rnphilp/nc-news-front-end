import axios from 'axios';

const BASE_URL = 'https://nc-news-rphilp.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

export const getArticles = async queries => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: queries
  });
  return data;
};

export const getArticle = async articleId => {
  const { data } = await axios.get(`${BASE_URL}/articles/${articleId}`);
  return data;
};

export const getComments = async (articleId, queries) => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${articleId}/comments`,
    { params: queries }
  );
  return data.comments;
};

export const incArticleVotes = async (articleId, num) => {
  const { data } = await axios.patch(`${BASE_URL}/articles/${articleId}`, {
    inc_votes: num
  });
  return data.article;
};
