import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import * as api from './api';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-start'
  }
});

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles !== this.state.articles) this.getArticles();
  }

  getArticles = () => {
    const {
      location: { search }
    } = this.props;
    api.getArticles(search).then(({ articles }) => {
      this.setState({
        articles
      });
    });
  };
}

Articles.propTypes = {};

export default withStyles(styles)(Articles);
