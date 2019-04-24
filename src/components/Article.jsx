import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Votes from './Votes';
import Comments from './Comments';
import * as api from './api';

class Article extends Component {
  state = {
    article: {}
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
        <Votes />
        <Comments comment_count={+article.comment_count} />
      </div>
    );
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    api.getArticle(this.props.articleId).then(({ article }) => {
      this.setState({
        article
      });
    });
  };
}

Article.propTypes = {};

export default Article;
