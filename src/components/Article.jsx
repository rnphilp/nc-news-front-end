import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

class Article extends Component {
  state = {
    article: {
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'cooking',
      created_at: '2018-05-30T00:00:00.000Z',
      votes: 0,
      comment_count: '6',
      body:
        "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading."
    }
  };
  render() {
    const { article } = this.state;
    return (
      <div>
        <Typography variant="h2">{article.title}</Typography>
        <Typography variant="h6">{article.author}</Typography>
        <Typography variant="h6">{article.created_at}</Typography>
        <Typography variant="h4">{article.topic}</Typography>
        <Typography variant="body1">{article.body}</Typography>
        <Typography variant="h6">Votes: {article.votes}</Typography>
        <Typography variant="h6">Comments: {article.comment_count}</Typography>
      </div>
    );
  }
}

Article.propTypes = {};

export default Article;
