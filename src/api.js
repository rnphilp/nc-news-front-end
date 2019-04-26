import axios from 'axios';

const BASE_URL = 'https://nc-news-rphilp.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

export const getArticles = async queries => {
  const {
    data: { articles }
  } = await axios.get(`${BASE_URL}/articles`, {
    params: queries
  });
  return articles.map(article => {
    const date = new Date(article.created_at);
    article.created_at = date.toUTCString().replace(' GMT', '');
    return article;
  });
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

export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data;
};
