import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Votes from './Votes';
import Comments from './Comments';
import * as api from '../api';

class Article extends Component {
  state = {
    article: {
      comment_count: 0,
      article_id: 33
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
        <Votes articleId={article.article_id} />
        <Comments
          commentCount={+article.comment_count}
          articleId={article.article_id}
        />
      </div>
    );
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    api.getArticle(this.props.articleId).then(article => {
      this.setState({
        article
      });
    });
  };
}

Article.propTypes = {};

export default withStyles({})(Article);
