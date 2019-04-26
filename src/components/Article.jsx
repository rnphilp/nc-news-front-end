import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Chip, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Votes from './Votes';
import Comments from './Comments';
import * as api from '../api';

const styles = theme => ({
  Chip: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});
class Article extends Component {
  state = {
    article: {
      comment_count: 0,
      article_id: 33
    }
  };
  render() {
    const { article } = this.state;
    const { classes } = this.props;
    const avatar = article.author && article.author.slice(0, 1).toUpperCase();
    return (
      <div>
        <Typography variant="h2">{article.title}</Typography>
        <Chip
          avatar={<Avatar>{avatar}</Avatar>}
          label={article.author}
          className={classes.Chip}
        />
        <Typography variant="body2">Posted on {article.created_at}</Typography>
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
    api
      .getArticle(this.props.articleId)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(err => {
        this.props.navigate(`/error/${err.response.status}`, { replace: true });
      });
  };
}

Article.propTypes = {};

export default withStyles(styles)(Article);
