import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
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
    articles: [
      {
        author: 'weegembump',
        title: 'Seafood substitutions are increasing',
        article_id: 33,
        topic: 'cooking',
        created_at: '2018-05-30T00:00:00.000Z',
        votes: 0,
        comment_count: '6'
      },
      {
        author: 'happyamy2016',
        title: 'High Altitude Cooking',
        article_id: 28,
        topic: 'cooking',
        created_at: '2018-05-27T00:00:00.000Z',
        votes: 0,
        comment_count: '5'
      },
      {
        author: 'jessjelly',
        title:
          'Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams',
        article_id: 30,
        topic: 'cooking',
        created_at: '2018-05-06T00:00:00.000Z',
        votes: 0,
        comment_count: '8'
      }
    ]
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
}

Articles.propTypes = {};

export default withStyles(styles)(Articles);
